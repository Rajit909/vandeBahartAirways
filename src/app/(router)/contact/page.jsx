"use client"

import { useRouter } from 'next/navigation'
import React, {  useState } from 'react'

const Contact = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject:"",
    message: ""
})

const handleChange = (e) => {
    const {id, value} = e.target;
    setUserData((prevData) => ({...prevData, [id]: value}))
}
console.log(userData)

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        const formData = new FormData();
        Object.keys(userData).forEach((key) =>{
            formData.append(key, userData[key])
        });

        const response = await fetch("/api/contact", {
            method: "POST",
            body: formData,
          });

        if (!response.ok) {
            throw new Error("Network response faild or Weak!")
        }

        const result = await response.json();
        if (result.success) {
            alert(result.message)
            Object.keys(userData).forEach((key) => {
                setUserData((prevData) => ({...prevData, [key]: " "}))
            })
            router.push("/contact")
        }else {
            alert("Failed to submit Application.");
          }

    }  catch (error) {
        console.log("Error Submitting form", error);
        alert("An error while submitting form. Please try again!");
      } finally {
        setIsLoading(false);
      }
}

  return (
    <>
       <div className="container-fluid contact bg-light py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: "900px"}} data-aos="fade-up" data-aos-easing="ease-in-sine">
                    <h5 className="section-title px-3">Contact Us</h5>
                    <h1 className="mb-0">Contact For Any Query</h1>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-easing="ease-in-sine">
                        <div className="bg-white rounded p-4">
                            <div className="text-center mb-4">
                                <i className="fa fa-map-marker-alt fa-3x text-primary"></i>
                                <h4 className="text-primary"></h4>
                                <p className="mb-0"> Gurugram, Haryana, INDIA</p>
                            </div>
                            {/* <div className="text-center mb-4">
                                <i className="fa fa-phone-alt fa-3x text-primary mb-3"></i>
                                <h4 className="text-primary">Mobile</h4>
                                <p className="mb-0">+012 345 67890</p>
                                <p className="mb-0">+012 345 67890</p>
                            </div> */}
                           
                            <div className="text-center">
                                <i className="fa fa-envelope-open fa-3x text-primary mb-3"></i>
                                <h4 className="text-primary">Email</h4>
                                <p className="mb-0">info@vandebharatairways.com</p>
                                <p className="mb-0">hr@vandebharatairways.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8" data-aos="fade-up" data-aos-easing="ease-in-sine">
                        <h3 className="mb-2">Send us a message</h3>
                        <p className="mb-4">
                            If you have any query, please fill out the form below and we will get back to you as soon as possible.
                            Feel free to write to us!
                        </p>
                        <form className='mx-5' onSubmit={handleSubmit}>     
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0" id="name" name='name' value={userData.name} onChange={handleChange} placeholder="Your Name" pattern="[A-Za-z\s\-]{3,}" required/>
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control border-0" id="email" name='email' value={userData.email} onChange={handleChange} placeholder="Your Email" required/>
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control border-0" id="subject" name='subject' pattern="[A-Za-z\s\-]{4,}" value={userData.subject} onChange={handleChange} placeholder="Subject" required/>
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control border-0" placeholder="Leave a message here" id="message" name='message' minLength="2" value={userData.message} onChange={handleChange} style={{height: "160px"}} required></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">
                                        
                     {isLoading ? (
                      <div className="text-md">
                        <span
                          className="spinner-border spinner-border-sm mb-1 mr-2 mt-4"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </div>
                    ) : (
                      "Send message"
                    )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12" data-aos="fade-up" data-aos-easing="ease-in-sine">
                        <div className="rounded">
                            <iframe className="rounded w-100" 
                            title="map"
                            style={{height: "550px"}}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.15030524903!2d76.9897491!3d28.42295755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1718266412450!5m2!1sen!2sin"
                            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact