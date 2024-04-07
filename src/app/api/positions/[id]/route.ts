import prisma from "@/lib/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
var JSONbig = require("json-bigint");

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    await prisma.position.delete({
      where: {
        id,
      },
    });
    return new Response("Succesfully deleted position", { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const position = await prisma
      .$extends(withAccelerate())
      .position.findFirst({
        cacheStrategy: {
          ttl: 60,
        },
        where: {
          id,
        },
      });
    return new Response(JSONbig.stringify(position), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
