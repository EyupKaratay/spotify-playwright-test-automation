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
      user: 'sender email@gmail.com',
      pass: 'sender email app password',
    },
  });

  const mailOptions = {
    from: 'targetemail@gmail.com',
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



