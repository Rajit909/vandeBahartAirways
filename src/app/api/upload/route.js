
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
// import fs from 'fs';
import path from 'path';
import { put } from '@vercel/blob';

// Helper function to save file to disk and return its path
async function saveFile(file) {
  // const buffer = await file.arrayBuffer();
  // const bytes = new Uint8Array(buffer);
  // const filePath = path.join(process.cwd(), 'public', 'uploads', file.name);
  // fs.writeFileSync(filePath, bytes);
  // return filePath;
  
  const response = await put(file.name, file,{
    access: "public"
  })
  // console.log(response)
  return (response.url); // Return the URL of the uploaded file


}

// Named export for the POST method
export async function POST(request) {
  try {
    // Parse the request body to extract form data
    const formData = await request.formData();

    // Extract fields from formData
    const fields = {};
    const files = {};
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        files[key] = value;
      } else {
        fields[key] = value;
      }
    }

    // Save files and get their paths
    const photoPath = await saveFile(files['photo']);
    const resumePath = await saveFile(files['resume']);

    const {
      name, email, mobile, dob, gender, fname, aadhar, education, city, post, pincode, district, state
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
      subject: 'New Job Application - from Vande Bharat Airways', // Subject line
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        DOB: ${dob}
        Gender: ${gender}
        Father's Name: ${fname}
        Aadhar: ${aadhar}
        Education: ${education}
          Address:-
          City: ${city}
          Post Office: ${post}
          Pincode: ${pincode}
          District: ${district}
          State: ${state}
      `,
      attachments: [
        {
          filename: path.basename(photoPath),
          path: photoPath,
        },
        {
          filename: path.basename(resumePath),
          path: resumePath,
        }
      ],
    };

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
