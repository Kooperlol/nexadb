import prisma from "@/lib/prisma";
var JSONbig = require("json-bigint");

export async function GET(request: Request) {
  try {
    const inquiries = await prisma.inquiry.findMany({
      cacheStrategy: {
        ttl: 60,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return new Response(JSONbig.stringify(inquiries), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
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
    return new Response(JSON.stringify(error), {
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
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
}
