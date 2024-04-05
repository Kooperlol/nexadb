import { storage } from "@/lib/firebase";
import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/prisma";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { withAccelerate } from "@prisma/extension-accelerate";
import json from "@/helpers/json";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const position = url.searchParams.get("position");

  try {
    let applications;

    if (position != null) {
      try {
        const response = await axios.get(
          `http://vercel.nexadb.com:3000/api/positions/${position}`
        );
        const positionName = response.data.position;
        applications = await prisma
          .$extends(withAccelerate())
          .application.findMany({
            cacheStrategy: {
              ttl: 60,
            },
            where: { position: positionName },
            orderBy: { createdAt: "desc" },
          });
      } catch (error) {
        console.error("Error fetching position data:", error);
        return new Response("Error fetching position data", { status: 500 });
      }
    } else {
      applications = await prisma
        .$extends(withAccelerate())
        .application.findMany({
          orderBy: { createdAt: "desc" },
        });
    }

    return new Response(json(applications), { status: 200 });
  } catch (error) {
    console.error("Error retrieving applications:", error);
    return new Response(json(error), { status: 500 });
  }
}

export async function POST(request: Request) {
  const {
    position,
    firstname,
    lastname,
    email,
    phone,
    resume,
    birthdate,
    gender,
    salary,
  } = Object.fromEntries(await request.formData());

  try {
    const resumeRef = ref(storage, uuidv4());
    const uploadTask = await uploadBytesResumable(resumeRef, resume as File);

    const downloadURL = await getDownloadURL(uploadTask.ref);

    await prisma.application.create({
      data: {
        position: position.toString(),
        firstname: firstname.toString(),
        lastname: lastname.toString(),
        email: email.toString(),
        phone: phone.toString(),
        birthdate: birthdate.toString(),
        gender: gender.toString(),
        preferredSalary: parseInt(salary.toString()),
        resume: downloadURL,
      },
    });

    return new Response("Successfully created application", { status: 200 });
  } catch (error) {
    console.error("Error creating application:", error);
    return new Response(json({ message: "Error creating application" }), {
      status: 500,
    });
  }
}
