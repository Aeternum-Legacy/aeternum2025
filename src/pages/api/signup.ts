"use server";

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import type { NextApiRequest, NextApiResponse } from "next";

// ✅ Use credentials from env
const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("👉 Received body:", req.body);

  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { firstName, lastName, email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const params = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Subject: { Data: "Welcome to Aeternum Beta!" },
      Body: {
        Text: {
          Data: `Hi ${firstName},\n\nThanks for signing up for Aeternum's beta launch.\n\nWe're excited to have you!`,
        },
      },
    },
    Source: "selina.park@aeternumproject.com",
  };

  try {
    await ses.send(new SendEmailCommand(params));
    res
      .status(200)
      .json({ message: "Signed up successfully! Please check your inbox." });
  } catch (error) {
    console.error("❌ SES error:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
