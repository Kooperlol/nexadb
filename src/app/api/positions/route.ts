import json from "@/helpers/json";
import prisma from "@/lib/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

export async function POST(request: Request) {
  const { position, salary, location, listed, about, image } =
    await request.json();
  try {
    await prisma.position.create({
      data: {
        position,
        location,
        about,
        image,
        salary,
        listed,
      },
    });

    return new Response("Succesfully created position", { status: 200 });
  } catch (error) {
    return new Response(json(error), { status: 500 });
  }
}

export async function PUT(request: Request) {
  const { position } = await request.json();

  try {
    await prisma.position.update({
      where: {
        id: position.id,
      },
      data: {
        position: position.position,
        salary: position.salary,
        listed: position.listed,
        location: position.location,
        about: position.about,
      },
    });
    return new Response("Succesfully updated position", { status: 200 });
  } catch (error) {
    return new Response(json(error), { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const positions = await prisma
      .$extends(withAccelerate())
      .position.findMany({
        cacheStrategy: {
          ttl: 60,
        },
        orderBy: {
          position: "desc",
        },
      });
    return new Response(json(positions), { status: 200 });
  } catch (error) {
    return new Response(json(error), { status: 500 });
  }
}
