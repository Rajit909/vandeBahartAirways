"use client";
import React from "react";
import Subscribe from "../subscribe/page";

const Career = () => {
  return (
    <>
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3 my-4">Apply for Jobs</h5>
            <h1 className="mb-0">
              Explore Job Opportunities, For Better Career
            </h1>
          </div>
          <div className="row g-5 ">
            <div class="card g-5 align-items-center shadow-lg bg-light">
              <div class="card-header bg-primary text-center w-100">
                <h4 class="text-white">JOB APPLICATION FORM</h4>
              </div>
              <div className="col-lg-12">
                <form className="mx-5">
                  <div className="row g-3 my-4">
                    <div className="col-md-4 my-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="name"
                          placeholder="Full Name"
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
                          placeholder="Date of irth."
                        />
                        <label htmlFor="dob">D.O.B</label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="form-floating">
                        <select
                          class="form-select"
                          name="Gender"
                          id="sel1"
                          required=""
                        >
                          <option value="" hidden="">
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
                          required
                        />
                        <label htmlFor="mobile">Father &apos;s name</label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="aadhar"
                          placeholder="Aadhar no."
                          required
                        />
                        <label htmlFor="mobile">Aadhar no. </label>
                      </div>
                    </div>

                    <div className="col-md-4 mb-4">
                      <div className="form-floating">
                        <select
                          class="form-select"
                          name="education"
                          id="sel2"
                          required=""
                        >
                          <option value="" hidden="">
                            Select Education
                          </option>
                          <option value="10th">10th</option>
                          <option value="12th">12th</option>
                          <option value="graduation">Graduation</option>
                          <option value="post-graduation">
                            Post Graduation
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="form-floating">
                        <input
                          type="file"
                          className="form-control border-1"
                          id="photo"
                          placeholder="Photo"
                          required
                        />
                        <label htmlFor="photo">Photo</label>
                      </div>
                    </div>

                    <div className="col-md-4 mb-4">
                      <div className="form-floating">
                        <select
                          class="form-select"
                          required=""
                          name="AppliedFor"
                        >
                          <option value="Travel Agent">Travel Agent</option>
                          <option value="Tourism Executive">
                            Tourism Executive
                          </option>
                          <option value="Tourism Manager">
                            Tourism Manager
                          </option>
                          <option value="Area Manager">Area Manager</option>
                          <option value="Assistant Branch Manager">
                            Assistant Branch Manager
                          </option>
                          <option value="HR Executive">HR Executive</option>
                          <option value="Supervisor">Supervisor</option>
                          <option value="Sales Executive">
                            Sales Executive
                          </option>
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
                          id="job-date"
                          placeholder="job date"
                        />
                        <label htmlFor="job-date">Applied job date</label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="house"
                          placeholder="House no."
                          required
                        />
                        <label htmlFor="house">House no. </label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="city"
                          placeholder="Village/City name"
                          required
                        />
                        <label htmlFor="city">Village/City name </label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="post"
                          placeholder="Post Office"
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
                          placeholder="Pincode no."
                          required
                        />
                        <label htmlFor="pincode">Pincode no.</label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="dist"
                          placeholder="District name"
                          required
                        />
                        <label htmlFor="dist">District</label>
                      </div>
                    </div>

                    <div className="col-md-8 mb-4">
                      <div className="form-floating">
                        <select
                          class="form-select"
                          name="State"
                          id="state"
                          required=""
                        >
                          <option value="">Select State</option>
                          <option value="1">ANDHRA PRADESH</option>
                          <option value="2">ASSAM</option>
                          <option value="3">ARUNACHAL PRADESH</option>
                          <option value="4">BIHAR</option>
                          <option value="5">GUJRAT</option>
                          <option value="6">HARYANA</option>
                          <option value="7">HIMACHAL PRADESH</option>
                          <option value="8">JAMMU &amp; KASHMIR</option>
                          <option value="9">KARNATAKA</option>
                          <option value="10">KERALA</option>
                          <option value="11">MADHYA PRADESH</option>
                          <option value="12">MAHARASHTRA</option>
                          <option value="13">MANIPUR</option>
                          <option value="14">MEGHALAYA</option>
                          <option value="15">MIZORAM</option>
                          <option value="16">NAGALAND</option>
                          <option value="17">ORISSA</option>
                          <option value="18">PUNJAB</option>
                          <option value="19">RAJASTHAN</option>
                          <option value="20">SIKKIM</option>
                          <option value="21">TAMIL NADU</option>
                          <option value="22">TRIPURA</option>
                          <option value="23">UTTAR PRADESH</option>
                          <option value="24">WEST BENGAL</option>
                          <option value="25">DELHI</option>
                          <option value="26">GOA</option>
                          <option value="27">PONDICHERY</option>
                          <option value="28">LAKSHDWEEP</option>
                          <option value="29">DAMAN &amp; DIU</option>
                          <option value="30">DADRA &amp; NAGAR</option>
                          <option value="31">CHANDIGARH</option>
                          <option value="32">ANDAMAN &amp; NICOBAR</option>
                          <option value="33">UTTARANCHAL</option>
                          <option value="34">JHARKHAND</option>
                          <option value="35">CHATTISGARH</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <h4 class="fw-bold text-success">Declaration / घोषणा</h4>
                    </div>
                    <div class="col-md-12">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name=""
                          id="declaration"
                          value="checkedValue"
                          required=""
                        />
                        <label class="form-check-label" for="declaration">
                          I Declare that the name, class, date of birth, address
                          and other information given by me in the online
                          application form is correct to the best of my
                          knowledge and belief. Which I declare to be truely
                          correct. If the above information is found incomplete
                          or incorrect, my candidature is liable to be
                          terminated at any time.
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default Career;
