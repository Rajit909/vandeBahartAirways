// src/app/api/send-application/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Named export for the POST method
export async function POST(request) {
  try {
    // Parse the request body to extract form data
    const body = await request.json();
    const {
      name,email, mobile, dob, gender, fname, aadhar, education, appliedFor,
      jobDate, house, city, post, pincode, district, state, photo, resume
    } = body;

    // Log the received data for debugging purposes
    console.log('Received form data:', body);

    // Configure Nodemailer transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Hostinger SMTP server
      port: 465, // Port for TLS
      secure: true, // Use TLS
      auth: {
        user: 'hr@vandebharatairways.com', // Your Hostinger email
        pass: 'Rambabu@#123' // Your Hostinger email password
      }
    });

    // Define the email options
    const mailOptions = {
      from: 'hr@vandebharatairways.com', // Sender address (your Hostinger email)
      to: 'vandebharatairways@gmail.com', // Recipient address
      subject: 'New Job Application- from Vande Bharat Airways', // Subject line
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        DOB: ${dob}
        Gender: ${gender}
        Father's Name: ${fname}
        Aadhar: ${aadhar}
        Education: ${education}
        Applied For: ${appliedFor}
        Job Date: ${jobDate}

        Address:
          House No: ${house}
          City: ${city}
          Post Office: ${post}
          Pincode: ${pincode}
          District: ${district}
          State: ${state}

        Documents:
          Photo : ${photo}
          Resume : ${resume}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
  } catch (error) {
    // Log the error details for debugging
    console.error('Error in API route:', error.message);
    console.error('Full error details:', error);

    // Return an error response
    return NextResponse.json({ error: 'Error sending email.' }, { status: 500 });
  }
}
