import prisma from "@/lib/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
var JSONbig = require("json-bigint");

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const application = await prisma
      .$extends(withAccelerate())
      .application.findFirst({
        cacheStrategy: {
          ttl: 60,
        },
        where: {
          id,
        },
      });
    return new Response(JSONbig.stringify(application), { status: 200 });
  } catch (error) {
    return new Response(JSONbig.stringify(error), { status: 500 });
  }
}
