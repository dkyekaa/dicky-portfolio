import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Konfigurasi transporter email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // contoh: smtp.gmail.com
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Kirim email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TARGET,
      subject: `Pesan Baru: ${subject}`,
      html: `
        <h2>Pesan Baru dari Website</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    // Kembalikan respons sukses
    return Response.json({ success: true, message: "Sending Email Successfully!" });
  } catch (error) {
    console.error("Error when Sending:", error);
    return Response.json(
      { success: false, error: "Sending Failed" },
      { status: 500 }
    );
  }
}

export function GET() {
  // Jika seseorang coba GET ke endpoint ini, balas dengan error 405
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
