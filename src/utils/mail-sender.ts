import nodemailer from 'nodemailer';
import path from 'path';

type EmailOptions = {
  to: string;
  subject?: string;
  text?: string;
  screenshotPath: string;
};

export async function sendScreenshotEmail(options: EmailOptions) {

  const {
    to,
    subject = 'Playwright Test Failure Screenshot',
    text = 'Test failed. Screenshot is attached.',
    screenshotPath,
  } = options;

  // Gmail transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL as string,
      pass: process.env.SENDER_APP_PASSWORD as string,
    },
  });

  const mailOptions = {
    from: process.env.TARGET_EMAIL as string,
    to,
    subject,
    text,
    attachments: [
      {
        filename: path.basename(screenshotPath),
        path: screenshotPath,
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}



