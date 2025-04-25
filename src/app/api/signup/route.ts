// app/api/signup/route.ts
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { NextResponse } from "next/server";

const sesv2 = new SESv2Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email } = body;

  if (!email || !firstName) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
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
      FromEmailAddress: "selina.park@aeternumproject.com",
    });

    await sesv2.send(command);

    return NextResponse.json({
      message: "Signed up successfully! Please check your inbox.",
    });
  } catch (error) {
    console.error("❌ SES error:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
