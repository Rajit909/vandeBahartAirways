"use client";
// pages/career.js or pages/your-page.js
import React, { useState } from "react";
// import Subscribe from '../subscribe/page';
import axios from "axios";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    fname: "",
    aadhar: "",
    education: "",
    appliedFor: "",
    jobDate: "",
    house: "",
    city: "",
    post: "",
    pincode: "",
    district: "",
    state: "",
    
  });

  const handleChange = (e) => {
    const { id, value } = e.target;-
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("/api/send-application", formData);
      alert(response.data.message);
      setFormData({
      name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    fname: "",
    aadhar: "",
    education: "",
    appliedFor: "",
    jobDate: "",
    house: "",
    city: "",
    post: "",
    pincode: "",
    district: "",
    state: "",
    photo: "",
    resume:""
    })
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div className="container-fluid contact bg-light py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3 my-4">Apply for Jobs</h5>
          <h1 className="mb-0">Explore Job Opportunities, For Better Career</h1>
        </div>
        <div className="row g-5">
          <div className="card g-5 align-items-center shadow-lg bg-light">
            <div className="card-header bg-primary text-center w-100">
              <h4 className="text-white">JOB APPLICATION FORM</h4>
            </div>
            <div className="col-lg-12">
              <form className="mx-5" action="/" onSubmit={handleSubmit} method="POST">
                <div className="row g-3 my-4">
                  <div className="col-md-4 my-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Full Name</label>
                    </div>
                  </div>
                  <div className="col-md-4 my-4">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-4 my-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="mobile"
                        placeholder="Mobile no."
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      <label htmlFor="mobile">Mobile no.</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control border-0"
                        id="dob"
                        placeholder="Date of Birth"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                      <label htmlFor="dob">D.O.B</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="" hidden>
                          Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="fname"
                        placeholder="Father's name"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="fname">Father &apos; s name</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="aadhar"
                        placeholder="Aadhar no."
                        value={formData.aadhar}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="aadhar">Aadhar no.</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                      >
                        <option value="" hidden>
                          Select Education
                        </option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Post-Graduation">Post Graduation</option>
                      </select>
                    </div>
                  </div>
                  

                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <select className="form-select" required id="appliedFor" name="appliedFor" value={formData.appliedFor} onChange={handleChange}>
                        <option value="Travel Agent">Travel Agent</option>
                        <option value="Tourism Executive">
                          Tourism Executive
                        </option>
                        <option value="Tourism Manager">Tourism Manager</option>
                        <option value="Area Manager">Area Manager</option>
                        <option value="Assistant Branch Manager">
                          Assistant Branch Manager
                        </option>
                        <option value="HR Executive">HR Executive</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Sales Executive">Sales Executive</option>
                        <option value="IT Manager">IT Manager</option>
                        <option value="HR Manager">HR Manager</option>
                        <option value="Customer Relationship Manager">
                          Customer Relationship Manager
                        </option>
                        <option value="PSA">PSA</option>
                        <option value="CSA">CSA</option>
                        <option value="Travel &amp; Tourism ">
                          Travel &amp; Tourism{" "}
                        </option>
                        <option value="Sales  Manager">Sales Manager</option>
                        <option value="Business Development Manager">
                          Business Development Manager
                        </option>
                        <option value="Ticket Support Executive ">
                          Ticket Support Executive{" "}
                        </option>
                        <option value="Cabin Crew">Cabin Crew</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control border-0"
                        id="jobDate"
                        placeholder="Job Date"
                        value={formData.jobDate}
                        onChange={handleChange}
                      />
                      <label htmlFor="jobDate">Job Date</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="house"
                        placeholder="House No."
                        value={formData.house}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="house">House No.</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="city"
                        placeholder="City/Village"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="city">City/Village</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="post"
                        placeholder="Post Office"
                        value={formData.post}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="post">Post Office</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="pincode">Pincode</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="district"
                        placeholder="District"
                        value={formData.district}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="district">District</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          name="state"
                          id="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select State</option>
                          <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                          <option value="ASSAM">ASSAM</option>
                          <option value="ARUNACHAL PRADESH">ARUNACHAL PRADESH</option>
                          <option value="BIHAR">BIHAR</option>
                          <option value="GUJRAT">GUJRAT</option>
                          <option value="HARYANA">HARYANA</option>
                          <option value="HIMACHAL PRADESH">HIMACHAL PRADESH</option>
                          <option value="JAMMU KASHMIR">JAMMU &amp; KASHMIR</option>
                          <option value="KARNATAKA">KARNATAKA</option>
                          <option value="KERALA">KERALA</option>
                          <option value="MADHYA PRADESH">MADHYA PRADESH</option>
                          <option value="MAHARASHTRA">MAHARASHTRA</option>
                          <option value="MANIPUR">MANIPUR</option>
                          <option value="MEGHALAYA">MEGHALAYA</option>
                          <option value="MIZORAM">MIZORAM</option>
                          <option value="NAGALAND">NAGALAND</option>
                          <option value="ORISSA">ORISSA</option>
                          <option value="PUNJAB">PUNJAB</option>
                          <option value="RAJASTHAN">RAJASTHAN</option>
                          <option value="SIKKIM">SIKKIM</option>
                          <option value="TAMIL NADU">TAMIL NADU</option>
                          <option value="TRIPURA">TRIPURA</option>
                          <option value="UTTAR PRADESH">UTTAR PRADESH</option>
                          <option value="WEST BENGAL">WEST BENGAL</option>
                          <option value="DELHI">DELHI</option>
                          <option value="GOA">GOA</option>
                          <option value="PONDICHERY">PONDICHERY</option>
                          <option value="LAKSHDWEEP">LAKSHDWEEP</option>
                          <option value="DAMAN and DIU">DAMAN &amp; DIU</option>
                          <option value="DADRA and NAGAR">DADRA &amp; NAGAR</option>
                          <option value="CHANDIGARH">CHANDIGARH</option>
                          <option value="ANDAMAN and NICOBAR">ANDAMAN &amp; NICOBAR</option>
                          <option value="UTTARANCHAL">UTTARANCHAL</option>
                          <option value="JHARKHAND">JHARKHAND</option>
                          <option value="CHATTISGARH">CHATTISGARH</option>
                        </select>
                      </div>
                    </div>

                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control border-0"
                        id="photo"
                        value={formData.photo}
                        placeholder="Upload Photo"
                        required
                      />
                      <label htmlFor="photo">Upload Photo</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control border-0"
                        id="resume"
                        value={formData.resume}
                        placeholder="Upload Resume"
                        required
                      />
                      <label htmlFor="resume">Upload Resume</label>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    className="btn btn-primary py-3 px-5 mb-4 w-100"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
