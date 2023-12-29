import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const inquiry = await prisma.inquiry.findFirst({
      where: {
        id,
      },
    });
    return new Response(JSON.stringify(inquiry), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
