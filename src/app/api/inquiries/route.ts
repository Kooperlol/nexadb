import json from "@/helpers/json";
import prisma from "@/lib/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

export async function GET(request: Request) {
  try {
    const inquiries = await prisma.$extends(withAccelerate()).inquiry.findMany({
      cacheStrategy: {
        ttl: 60,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return new Response(json(inquiries), { status: 200 });
  } catch (error) {
    return new Response(json(error), { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { firstname, lastname, email, message } = body;
  try {
    await prisma.inquiry.create({
      data: {
        firstname,
        lastname,
        email,
        message,
        createdAt: new Date(),
        open: true,
      },
    });

    return new Response("Succesfully created inquiry", {
      status: 200,
    });
  } catch (error) {
    return new Response(json(error), {
      status: 500,
    });
  }
}

export async function PUT(request: Request) {
  const { inquiryId, open } = await request.json();

  try {
    await prisma.inquiry.update({
      where: {
        id: inquiryId,
      },
      data: {
        open,
      },
    });

    return new Response("Succesfully updated inquiry", {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(json(error), {
      status: 500,
    });
  }
}
