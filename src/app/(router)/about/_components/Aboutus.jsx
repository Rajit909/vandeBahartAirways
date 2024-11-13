import React from "react";
import Image from "next/image";
// import Subscribe from "../../_components/Subscribe";

const Aboutus = () => {
  return (
    <div>
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <div
                className="h-100"
                style={{
                  border: "50px solid",
                  borderColor: " transparent #13357B transparent #13357B",
                }}
              >
                <Image
                  src="/images/about.gif"
                  className="img-fluid"
                  alt=""
                  width={400}
                  height={100}
                  sizes="100vw"
                />
              </div>
            </div>
            <div
              className="col-lg-7"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(images/about-img-1.png)",
              }}
              data-aos="fade-left"
            >
              <h5 className="section-about-title pe-3">About Us</h5>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary">VandeBharat Airways</span>
              </h1>
              <p className="mb-4 " style={{textAlign: "justify"}}>
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

             
            </div>
            <div>
            <div>
                <p  style={{textAlign: "justify"}}>
                  <br />
                  <h4>MISSION::</h4> Our mission is to dedication to the highest
                  quality of Customer Service delivered with a sense of warmth,
                  friendliness, individual pride, and Company Spirit. To help
                  people around the world plan and have the perfect trip..
                  <br />
                  &nbsp; &nbsp;- Vande Bharat Airways is committed to provide
                  affordable, reliable, and exceptional air travel with
                  prioritizing passenger comfort, And fostering culture of
                  safety.
                </p>
              </div>

              <div>
                <p className=" justify-text" style={{textAlign: "justify"}}>
                  <br />
                  <h4>VISION:</h4> At Vande Bharat Airways, our vision is to
                  transform the flying experience, making it effortless,
                  enjoyable, and inclusive for all. We strive to:.
                  <br />
                  &nbsp; &nbsp; - Set new standards in customer service,
                  exceeding expectations at every touchpoint. <br />
                  &nbsp; &nbsp; - Pioneer innovative solutions, harnessing
                  technology to enhance safety, efficiency, and sustainability.
                  <br />
                  &nbsp; &nbsp;- Foster a culture of collaboration, empowering
                  our diverse team to grow and thrive.
                  <br />
                  &nbsp; &nbsp;- Expand our global network, connecting
                  communities and cultures with reliability and comfort.
                  <br />
                  &nbsp; &nbsp; - Lead the industry in environmental
                  stewardship, minimizing our ecological footprint.
                  <br />
                  By living these values, we aim to earn the loyalty of our
                  customers, the respect of our peers, and the pride of our
                  employees
                </p>

                <p>
                  <h1>VALUES:</h1>
                  <ol style={{textAlign: "justify"}}>
                    <li>
                      Safety: Prioritize the well-being of passengers,
                      employees, and communities.
                    </li>
                    <li>
                      Customer Focus: Deliver exceptional experiences through
                      empathy, respect, and responsiveness.
                    </li>

                    <li>
                      Integrity: Operate with transparency, ethics, and
                      accountability.
                    </li>

                    <li>
                      Teamwork: Foster collaboration, inclusivity, and open
                      communication.
                    </li>

                    <li>
                      Innovation: Encourage creativity, experimentation, and
                      continuous improvement.
                    </li>
                    <li>
                      Sustainability: Minimize environmental impact through
                      responsible practices.
                    </li>
                    <li>Reliability: Ensure consistent, dependable service.</li>

                    <li>
                      Empathy: Show understanding and compassion for diverse
                      passenger needs.
                    </li>
                  </ol>
                </p>
              </div>

              <div>
                <h3 className=" foot-semibold">UPCOMIMG SERVICES:</h3>
                <ul style={{textAlign: "justify"}}>
                  <li>TICKETS BOOKING</li>
                  <li>Flight Booking</li>
                  <li>Hotel Booking Cab</li>
                  <li>Hotel Booking Cab</li>
                  <li> Bus, and Train Booking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Subscribe/> */}
    </div>
  );
};

export default Aboutus;
