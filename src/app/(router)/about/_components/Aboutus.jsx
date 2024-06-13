import React from "react";
import Image from "next/image";
import Subscribe from "../../subscribe/page";

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
                Welcome to Vande Bharat Airways continues to be better place for
                tour and travels across the world from 2021 onwards. We have
                come up with a better platform for family vacation, or a weekend
                getaway. We are dedicated to making your travel experience
                seamless, convenient, and enjoyable. we are here to help you
                find the best deals on airlines tickets, train reservations, and
                hotel accommodations.
                <p>
                  <br />
                  <h4>Wide Selection:</h4> We partner with leading airlines,
                  train operators, and hotels worldwide to offer you a diverse
                  range of options to suit your preferences and budget.
                  <br />
                  &nbsp; &nbsp;- User-Friendly Interface: Our website features
                  an intuitive interface designed to make the booking process
                  quick and hassle-free. With just a few clicks, you can search
                  for flights, trains, and hotels, compare prices, and complete
                  your reservation.
                  <br />
                  &nbsp; &nbsp; - Best Prices: We re committed to helping you
                  save money on your travels. Our advanced search algorithms
                  scour the web to find the best deals and discounts, ensuring
                  that you get the most value for your money.
                </p>
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
      </div>
      <Subscribe/>
    </div>
  );
};

export default Aboutus;
