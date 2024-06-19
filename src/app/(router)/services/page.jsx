"use client"
import React from "react";

const Services = () => {
  return (
    <>
      <div className="container-fluid bg-light service py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Searvices</h5>
            <h1 className="mb-0">Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                    <div className="service-icon p-4">
                      <i className="fa fa-globe fa-4x text-primary"></i>
                    </div>
                    <div className="service-content ">
                        <br />
                      <h5 className="mb-4">WorldWide Tours</h5>
                      <p className="mb-0">
                        We are a Leading travel agency specialized in group
                        travel all over world and the most exciting destinations
                        in world. We are offering top services for all travel
                        needs and the most different type of groups. We are sure
                        that will inspire you to create your own and unique
                        tour.
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="service-content-inner d-flex align-items-center  bg-white border border-primary rounded p-4 pe-0">
                    <div className="service-icon p-4">
                      <i className="fa fa-hotel fa-4x text-primary"></i>
                    </div>
                    <div className="service-content ">
                      <h5 className="mb-4">Hotel Reservation</h5>
                      <p className="mb-0">
                        Find your perfect hotel stay with us, we guarantee!! We
                        can give you the effortless Hotel Bookings on a
                        unbeatable prices. Here you will find easiest and secure
                        way of booking. What you are waiting for ?? We have very
                        exclusive deal for you, use the platform and come up
                        with your plans. <br />
                        We provide safe and secure transactions with trusted
                        payments gateways. We have Dedicated team to assist you
                        throughout your booking journey. <br /> 24/7 Customer
                        Support
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                    <div className="service-icon p-4">
                      <i className="fa fa-user fa-4x text-primary"></i>
                    </div>
                    <div className="service-content ">
                      <h5 className="mb-4">Travel Guides</h5>
                      <p className="mb-0">
                        Cater to different travel styles and budgets. Include
                        popular tourist spots, hidden gems, and
                        off-the-beaten-path adventures. <br />
                        <h6
                          style={{ fontWeight: "bold", color: "gray" }}
                          className="mt-2"
                        >
                          Make your priorities and right plans
                        </h6>
                        <ul>
                          <li style={{listStyleType: "circle"}}>
                            Carry your visa requirements, currency exchange,
                            best time to visit, average weather conditions, and
                            basic local etiquette.
                          </li>
                          <li style={{listStyleType: "circle"}}>
                            Create categorized sections highlighting must-see
                            attractions, historical sites, cultural experiences,
                            outdoor activities, and hidden gems.
                          </li>
                          <li style={{listStyleType: "circle"}}>
                            Book your flights and accommodation in advance
                          </li>
                          <li style={{listStyleType: "circle"}}>
                            Where To Stay: Best hotels, hostels, and unique
                            accommodations catering to different budgets and
                            travel styles.
                          </li>
                          <li style={{listStyleType: "circle"}}>Eat budget-friendly meal.</li>
                          <li style={{listStyleType: "circle"}}>
                            Smooth and cheap public transportation options, car
                            rentals, taxis, and ride-sharing services. Action
                            Now!!on travel guides.
                          </li>
                        </ul>
                        Book Your Tour Now! Explore Our handsome Packages, or
                        Browse Hotels at your destinations. If you &apos;re
                        visiting a conservative country, dress modestly to avoid
                        offending locals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                    <div className="service-icon p-4">
                      <i className="fa fa-cog fa-4x text-primary"></i>
                    </div>
                    <div className="service-content ">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <h5 className="mb-4">24x7 Customer support</h5>
                      <p className="mb-0">
                        We respect your money packets and your choices
                        that&apos; why we are always be there to handle, to
                        cover your best plans in best rates. Don &apos;t think
                        about single effort from our side, we will be there to
                        help you out anytime support required. YOU ARE JUST A
                        SECOND WAY FROM US…!!
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="text-center">
                <a
                  className="btn btn-primary rounded-pill py-3 px-5 mt-2"
                  href=""
                >
                  Service More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
