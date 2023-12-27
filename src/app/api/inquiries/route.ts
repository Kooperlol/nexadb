import prisma from "@/lib/prisma";

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
        open: true,
      },
    });

    return new Response(null, {
      status: 200,
    });
  } catch (error) {
    return new Response(null, {
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

    return new Response(null, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
    });
  }
}