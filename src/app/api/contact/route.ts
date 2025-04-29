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

  try {
    const companyEmail = "selina.park@aeternumproject.com"; // ← send FROM here and TO here

    // 1. Send email to your company
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

    // 2. Send confirmation email to user
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

    await Promise.all([
      sesClient.send(sendToCompany),
      sesClient.send(sendToUser),
    ]);

    return NextResponse.json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send emails" },
      { status: 500 }
    );
  }
}
