"use client";
import { useRouter } from "next/navigation";
// pages/career.js or pages/your-page.js
import React, { useState } from "react";


const Career = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();



  const [userData, setUserData] = useState({
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

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhotoFile(file);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const formData = new FormData();
      formData.append("photo", photoFile);
      formData.append("resume", resumeFile);
      Object.keys(userData).forEach((key) => {
        formData.append(key, userData[key]);
      });

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.success) {
        alert(result.message);
        Object.keys(userData).forEach((key) => {
          setUserData((prevData) => ({ ...prevData, [key]: "" }));
        });
        setPhotoFile("");
        setResumeFile("");

        router.push("/")
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again!");
    }finally{
      setIsLoading(false)
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
              <form
                className="mx-5"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="row g-3 my-4">
                  <div className="col-md-4 my-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={userData.name}
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
                        name="email"
                        placeholder="Your Email"
                        value={userData.email}
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
                        name="mobile"
                        placeholder="Mobile no."
                        value={userData.mobile}
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
                        name="dob"
                        placeholder="Date of Birth"
                        value={userData.dob}
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
                        name="gender"
                        value={userData.gender}
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
                        name="fname"
                        placeholder="Father's name"
                        value={userData.fname}
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
                        name="aadhar"
                        placeholder="Aadhar no."
                        value={userData.aadhar}
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
                        name="education"
                        value={userData.education}
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
                      <select
                        className="form-select"
                        required
                        id="appliedFor"
                        name="appliedFor"
                        value={userData.appliedFor}
                        onChange={handleChange}
                      >
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
                        name="jobDate"
                        placeholder="Job Date"
                        value={userData.jobDate}
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
                        name="house"
                        placeholder="House No."
                        value={userData.house}
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
                        name="city"
                        placeholder="City/Village"
                        value={userData.city}
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
                        name="post"
                        placeholder="Post Office"
                        value={userData.post}
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
                        name="pincode"
                        placeholder="Pincode"
                        value={userData.pincode}
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
                        name="district"
                        value={userData.district}
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
                        value={userData.state}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select State</option>
                        <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                        <option value="ASSAM">ASSAM</option>
                        <option value="ARUNACHAL PRADESH">
                          ARUNACHAL PRADESH
                        </option>
                        <option value="BIHAR">BIHAR</option>
                        <option value="GUJRAT">GUJRAT</option>
                        <option value="HARYANA">HARYANA</option>
                        <option value="HIMACHAL PRADESH">
                          HIMACHAL PRADESH
                        </option>
                        <option value="JAMMU KASHMIR">
                          JAMMU &amp; KASHMIR
                        </option>
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
                        <option value="DADRA and NAGAR">
                          DADRA &amp; NAGAR
                        </option>
                        <option value="CHANDIGARH">CHANDIGARH</option>
                        <option value="ANDAMAN and NICOBAR">
                          ANDAMAN &amp; NICOBAR
                        </option>
                        <option value="UTTARANCHAL">UTTARANCHAL</option>
                        <option value="JHARKHAND">JHARKHAND</option>
                        <option value="CHATTISGARH">CHATTISGARH</option>
                      </select>
                    </div>
                  </div>
                  {/* {imageUrl && (
                    <div className="border w-50">
                      <p>Uploaded Image Preview</p>
                      <Image
                        src={imageUrl}
                        alt="Uploaded Image"
                        width={180}
                        height={150}
                      />
                    </div>
                  )} */}

                  <div className="col-md-4 mb-4">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control border-0"
                        id="photo"
                        name="photo"
                        onChange={handlePhotoChange}
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
                        name="resume"
                        onChange={handleResumeChange}
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
                   {isLoading ? 
                                   <div className="text-md">

                                   <span
                                   className="spinner-border spinner-border-sm mb-1 mr-2"
                                   role="status"
                                   aria-hidden="true"
                                   ></span>
                                 Please wait...
                                   </div>
                                   : 
                                   'Register now'}
                  </button>
                </div>
              </form>
              {/* {errorMessage && <p>{errorMessage}</p>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
