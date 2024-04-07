import prisma from "@/lib/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
var JSONbig = require("json-bigint");

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
    return new Response(JSONbig.stringify(inquiry), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
