import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const sesClient = new SESv2Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  const { firstName, lastName, email, notes } = await req.json();

  if (!email || !firstName) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const companyEmail = "selina.park@aeternumproject.com";

  const sendToCompany = new SendEmailCommand({
    FromEmailAddress: companyEmail,
    Destination: {
      ToAddresses: [companyEmail],
    },
    Content: {
      Simple: {
        Subject: { Data: `New Contact Form Submission from ${firstName}` },
        Body: {
          Text: {
            Data: `You have a new contact form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${
              notes || "No message provided."
            }`,
          },
        },
      },
    },
  });

  const sendToUser = new SendEmailCommand({
    FromEmailAddress: companyEmail,
    Destination: {
      ToAddresses: [email],
    },
    Content: {
      Simple: {
        Subject: { Data: "Thanks for contacting Aeternum!" },
        Body: {
          Text: {
            Data: `Hi ${firstName},\n\nThank you for reaching out to Aeternum. We've received your message and will respond as soon as possible.\n\nBest regards,\nThe Aeternum Team`,
          },
        },
      },
    },
  });

  try {
    await sesClient.send(sendToCompany);
  } catch (err) {
    console.error("❌ Failed to send to company:", err);
    return NextResponse.json(
      { message: "Failed to notify company" },
      { status: 500 }
    );
  }

  try {
    await sesClient.send(sendToUser);
  } catch (err) {
    console.error("⚠️ Failed to send confirmation to user:", err);
  }

  return NextResponse.json({ message: "Submission complete!" });
}
