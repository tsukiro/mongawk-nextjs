import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
  url: "https://api.mailgun.net"
});

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: "ShipFree <no-reply@yourdomain.com>",
      to,
      subject,
      html,
    });
    console.log(`📧 Email sent to ${to}`);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}
