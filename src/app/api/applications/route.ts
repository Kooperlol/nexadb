import { storage } from "@/lib/firebase";
import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/prisma";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export async function GET(request: Request) {
  try {
    const applications = await prisma.application.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return new Response(JSON.stringify(applications), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

export async function POST(request: Request) {
  const { position, firstname, lastname, email, phone, resume } =
    Object.fromEntries(await request.formData());
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
        resume: downloadURL,
      },
    });

    return new Response("Succesfully created resume", { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
