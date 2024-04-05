import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { COOKIE_NAME, MAX_AGE } from "@/helpers/constants";
import json from "@/helpers/json";

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  if (
    username != process.env.ADMIN_LOGIN ||
    password != process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      {
        messsage: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const secret = process.env.JWT_SECRET || "";
  const token = sign({}, secret, {
    expiresIn: MAX_AGE,
  });

  const seralized = serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  return new Response(
    json({
      message: "Authenticated!",
    }),
    {
      status: 200,
      headers: { "Set-Cookie": seralized },
    }
  );
}
