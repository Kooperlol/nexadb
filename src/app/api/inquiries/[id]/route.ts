import json from "@/helpers/json";
import prisma from "@/lib/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const inquiry = await prisma.$extends(withAccelerate()).inquiry.findFirst({
      cacheStrategy: {
        ttl: 60,
      },
      where: {
        id,
      },
    });
    return new Response(json(inquiry), { status: 200 });
  } catch (error) {
    return new Response(json(error), { status: 500 });
  }
}
