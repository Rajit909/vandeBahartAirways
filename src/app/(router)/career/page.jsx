"use client"
import React from "react";
import Subscribe from "../subscribe/page";



const Career = () => {
  return (
    <>
      <div className="">
        <h1
          className="
          text-4xl
          font-bold
          text-center
          mt-10
          mb-10
          bg-gradient-to-r
        "
        >
          Career
        </h1>
        <p className="text-center">This is the career page</p>
        <hr
          className="
          w-1/2
          h-1
          bg-gradient-to-r
          from-gray-400
          to-gray-500
        "
        />
        <div
          className="
          w-1/2
          h-1
          bg-gradient-to-r
          from-gray-400
          to-gray-500
          m-auto
          mt-10
          mb-10

        "
        >
          <h2 className="text-center">
            Job Openings at{" "}
            <span className="text-primary">Vande Bharat Airways</span>
          </h2>

          <div className=" mt-10 ">
            <h3 className="text-center mt-5">
              We are hiring for the following positions:
            </h3>
            <ul className="list-disc list-inside">
              <li>Flight Attendant</li>
              <li>Ground Staff</li>
              <li>Customer Service</li>
              <li>Security</li>
              <li>Management</li>
            </ul>
          </div>

          <div className=" mt-10 bg-primary p-5 ">
            <h3 className="text-center mt-5 text-white">
              Benefits of working with us:
            </h3>
            <ul className="list-disc list-inside">
              <li className="text-white">Competitive Salary</li>
              <li className="text-white">Health Insurance</li>
              <li className="text-white">Retirement Plan</li>
              <li className="text-white">Flexible Hours</li>
              <li className="text-white">Travel Discounts</li>
            </ul>
          </div>
          <div className="col-lg-12 mx-5">
            <h3 className="text-center mt-5">Apply Now</h3>
            <p className="text-center">
              To apply for a position, please fill out the form below:
              <form action="">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Full Name</label>
                    </div>
                  </div>
                </div>
              </form>
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default Career;
