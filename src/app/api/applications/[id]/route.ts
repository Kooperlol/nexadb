import prisma from "@/lib/prisma";
var JSONbig = require("json-bigint");

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const application = await prisma.application.findFirst({
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
