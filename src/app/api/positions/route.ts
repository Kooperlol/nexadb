import prisma from "@/lib/prisma";
var JSONbig = require("json-bigint");

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
    return new Response(JSON.stringify(error), { status: 500 });
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
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const positions = await prisma.position.findMany({
      cacheStrategy: {
        ttl: 60,
      },
    });
    console.log(2);
    return new Response(JSONbig.stringify(positions), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
