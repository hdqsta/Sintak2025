import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      GMAIL_USER: "domesabatiknusantara@gmail.com",
      GMAIL_PASS: "fhnf atwf yyge zlpt",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Pesan dari ${name}`,
      text: message,
    });

    return res.status(200).json({ message: "Email terkirim!" });
  } catch (error) {
    console.error("Gagal kirim email:", error);
    return res.status(500).json({ message: "Gagal mengirim email." });
  }
}
