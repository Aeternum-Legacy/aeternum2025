import * as dotenv from "dotenv";

dotenv.config();
console.log("✅ ENV:", process.env.AWS_REGION);

import { SESv2Client, CreateEmailTemplateCommand } from "@aws-sdk/client-sesv2";

const sesv2 = new SESv2Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

async function createTemplate() {
  const command = new CreateEmailTemplateCommand({
    TemplateName: "WelcomeToAeternum",
    TemplateContent: {
      Subject: "Welcome to Aeternum",
      Text: `Hi {{name}},\n\nThank you for signing up to Aeternum.\n\nWe’re building a space where memories live forever, and we’re so glad to have you with us from the very beginning.\n\nAs part of our early community, you’ll receive exclusive updates, early access to participate in our beta phase, and an early opportunity to be part of something meaningful in the way we preserve stories and legacies.\n\nWe’ll be in touch soon, and we can’t wait to share more with you.\n\nYour legacy matters.\n\nThe Aeternum Team`,
      Html: `<html><body style="font-family:Arial,sans-serif;color:#333;line-height:1.6;padding:20px;">
          <h2>Hi {{name}},</h2>
          <p>Thank you for signing up to <strong>Aeternum</strong>.</p>
          <p>We’re building a space where memories live forever, and we’re so glad to have you with us from the very beginning.</p>
          <p>As part of our early community, you’ll receive:</p>
          <ul>
            <li>Exclusive updates</li>
            <li>Early access to our beta phase</li>
            <li>An opportunity to shape how stories and legacies are preserved</li>
          </ul>
          <p>We’ll be in touch soon, and we can’t wait to share more with you.</p>
          <p><strong>Your legacy matters.</strong><br />— The Aeternum Team</p>
        </body></html>`,
    },
  });

  await sesv2.send(command);
  console.log("✅ Template created successfully.");
}

createTemplate().catch((err) =>
  console.error("❌ Error creating template:", err)
);
