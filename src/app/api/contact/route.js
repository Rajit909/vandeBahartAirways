import { NextResponse } from "next/server";
import nodemailer from "nodemailer"


export async function POST(request){
    try {
        const formData = await request.formData();

        // Extract fields from formData
        const fields = {};
        for (const [key, value] of formData.entries()) {
              fields[key] = value;
          }

          const {
            name, email, subject, message
          } = fields;

           // Configure Nodemailer transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com', // Hostinger SMTP server
        port: 465, // Port for TLS
        secure: true, // Use TLS
        auth: {
          user: process.env.EMAIL_USER, // Your Hostinger email
          pass: process.env.EMAIL_PASS // Your Hostinger email password
        }
      });

        // Define the email options
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address (your Hostinger email)
        to: process.env.EMAIL_TO, // Recipient address
        subject: 'Contact request - from Vande Bharat Airways', // Subject line
        text: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
          `

    }
  // Send the email
  await transporter.sendMail(mailOptions);

  // cleanup files
  
  // Return a success response
  return NextResponse.json({ success: true, message: 'Application submitted successfully!' }, { status: 200 });
} catch (error) {
  // Log the error details for debugging
  console.error('Error in API route:', error.message);
  console.error('Full error details:', error);

  // Return an error response
  return NextResponse.json({ error: 'Error sending email.' }, { status: 500 });
}
}
