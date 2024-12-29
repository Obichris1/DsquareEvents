// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message, phoneNumber, formattedDate } = await request.json();

  console.log(formattedDate)
//   console.log(process.env.EMAIL_PASS);
  

  // Configure Nodemailer with your email service
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // e.g., Gmail, Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER, // Set in your .env.local file
      pass: process.env.EMAIL_PASS, // Set in your .env.local file
    },
    service : 'gmail',
    port : 465,
    secure : true
  });

  console.log(transporter);
  

  const mailOptions = {
    from: email,
    to: "obichris202@gmail.com", // Replace with your receiving email
    subject: "D'Square Events Center Booking",
    text: `
    D'Square Events Center Booking:

    Client's Name: ${name}
    Email Address: ${email}
    Phone Number: ${phoneNumber}
    Date of Event: ${formattedDate ? formattedDate : "Not provided"}

    Message:
    ${message}
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
