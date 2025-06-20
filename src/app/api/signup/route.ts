import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { signupsTable } from "@/schema";

const sesv2 = new SESv2Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { message: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format." },
        { status: 400 }
      );
    }

    try {
      await db.insert(signupsTable).values({
        firstName,
        lastName,
        email,
      });
    } catch (error: any) {
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "This email is already registered." },
          { status: 409 }
        );
      }
      console.error("Database insertion error:", error);
      return NextResponse.json(
        { message: "An unexpected error occurred during signup." },
        { status: 500 }
      );
    }

    try {
      const command = new SendEmailCommand({
        Destination: {
          ToAddresses: [email],
        },
        Content: {
          Template: {
            TemplateName: "WelcomeToAeternum",
            TemplateData: JSON.stringify({
              name: firstName,
            }),
          },
        },
        FromEmailAddress: "info@aeternumproject.com",
      });

      await sesv2.send(command);
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return NextResponse.json(
        { message: "Signup successful, but failed to send welcome email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Signed up successfully! Please check your inbox.",
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
