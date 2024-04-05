import { COOKIE_NAME } from "@/helpers/constants";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";
import json from "@/helpers/json";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);

  if (!token) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  try {
    verify(token.value, process.env.JWT_SECRET || "");
    return new Response(
      json({
        response: "authenticated",
      }),
      { status: 200 }
    );
  } catch (e) {}
}
