import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div>
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div
                className="h-100"
                style={{
                  border: "50px solid",
                  borderColor: " transparent #13357B transparent #13357B",
                }}
              >
                <Image
                  src="/images/about.jpg"
                  className="img-fluid"
                  alt=""
                  width={400}
                  height={100}
                />
              </div>
            </div>
            <div
              className="col-lg-7"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(images/about-img-1.png)",
              }}
            >
              <h5 className="section-about-title pe-3">About Us</h5>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary">VandeBharat Airways</span>
              </h1>
              <p className="mb-4">
                Vande Bharat Airways continues to be better place for tour and
                travels across the world from 2021 onwards. We have come up with
                a better platform for family vacation,or a weekend getway. We
                are dedicated to making your travel experience seamless,
                convenient, and enjoyable. we are here to help you find the best
                deals on airlines tickets, train reservations, and hotel
                accommodations.!
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>First
                    Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>5
                    Star Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>150
                    Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>24/7
                    Service
                  </p>
                </div>
              </div>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mt-2"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
      
    </div>
    
  );
};

export default Aboutus;
