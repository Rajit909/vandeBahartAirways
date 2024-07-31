"use client";
import Image from "next/image";
import React from "react";

const Tour = () => {
  return (
    <>
      <div className="container-fluid ExploreTour py-5">
        <div className="container py-5">
          <div className="mx-auto mb-5" style={{ maxWidth: "900px" }}>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <h5 className="section-title px-3">Explore Tour</h5>
              <h1 className="mb-4">The World</h1>
            </div>
            <p className="mb-0" data-aos="fade-up" data-aos-easing="ease-in">
              We offer small group adventure tours to over 100 countries, from
              the best tourist destinations to tick off your bucket list to the
              more unusual places that make ideal adventure holiday
              destinations. Our adventure travel experts have scouted out the
              best adventure holiday destinations for our small group trips.
              <br /> No matter which country you choose, our itineraries include
              the best there is to offer from local culture and history, to
              activities and wildlife-spotting. We &apos;ll include the must-see
              tourist highlights but also uncover the hidden gems and
              once-in-a-lifetime moments you wouldn&apos;t otherwise experience.
              We&apos;ve got the pick of all the best adventure tourism
              destinations that are ready for exploring - where will you choose
              to go next? Select a place to go below to browse the trips
              available in that region, or use the menu at the top of the
              website to browse by country
            </p>
          </div>
          <div className="tab-className text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                  data-bs-toggle="pill"
                  href="#NationalTab-1"
                >
                  <span className="text-dark" style={{ width: "250px" }}>
                    National Tour Category
                  </span>
                </a>
              </li>
           
            </ul>
            <div >
              <div id="NationalTab-1" className="tab-pane fade show p-0 active ">
                <div className="row g-4">
                  <div
                    className="col-md-6 col-lg-4"
                    data-aos="fade-up"
                    data-aos-easing="ease-in"
                  >
                    <div className="national-item">
                      <Image
                        src="/images/explore-tour-1.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                        width={400}
                        height={200}
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Weekend Tour
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4"
                    data-aos="fade-up"
                    data-aos-easing="ease-in"
                  >
                    <div className="national-item">
                      <Image
                        src="/images/explore-tour-2.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                        width={400}
                        height={200}
                      />

                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Holiday Tour
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4"
                    data-aos="fade-up"
                    data-aos-easing="ease-in"
                  >
                    <div className="national-item">
                      <Image
                        src="/images/explore-tour-3.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                        width={400}
                        height={200}
                      />

                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Road Trip
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tour-offer bg-info">15% Off</div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4"
                    data-aos="fade-up"
                    data-aos-easing="ease-in"
                  >
                    <div className="national-item">
                      <Image
                        src="/images/explore-tour-4.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                        width={400}
                        height={200}
                      />

                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Historical Trip
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4"
                    data-aos="fade-up"
                    data-aos-easing="ease-in"
                  >
                    <div className="national-item">
                      <Image
                        src="/images/explore-tour-5.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                        width={400}
                        height={200}
                      />

                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Family Tour
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tour-offer bg-warning">50% Off</div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4"
                    data-aos="fade-up"
                    data-aos-easing="ease-in"
                  >
                    <div className="national-item">
                      <Image
                        src="/images/explore-tour-6.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                        width={400}
                        height={200}
                      />

                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Beach Tour
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                <div className="py-2  active my-4">
                  <span className="text-dark border border-primary bg-light rounded-pill p-2" style={{ width: "250px" }}>
                    International tour Category
                  </span>
                </div>
              <div id="InternationalTab-2" className="tab-pane fade show p-0">
                <div className="InternationalTour-carousel owl-carousel">
                  <div className="international-item">
                    <Image
                      src="/images/explore-tour-7.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                      width={400}
                      height={200}
                    />

                    <div className="international-content">
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Australia
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1"></i> 8
                          Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2"></i>{" "}
                          <span>143+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    <div className="tour-offer bg-success">30% Off</div>
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                  <div className="international-item">
                    <Image
                      src="/images/explore-tour-8.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                      width={400}
                      height={200}
                    />

                    <div className="international-content">
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Germany
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1"></i> 12
                          Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2"></i>{" "}
                          <span>21+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                  <div className="international-item">
                    <Image
                      src="/images/explore-tour-1.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                      width={400}
                      height={200}
                    />

                    <div className="international-content">
                      <div className="tour-offer bg-warning">45% Off</div>
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Spain
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1"></i> 9
                          Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2"></i>{" "}
                          <span>133+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                  <div className="international-item">
                    <Image
                      src="/images/explore-tour-4.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                      width={400}
                      height={200}
                    />

                    <div className="international-content">
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Japan
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1"></i> 8
                          Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2"></i>{" "}
                          <span>137+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                  <div className="international-item">
                    <Image
                      src="/images/explore-tour-5.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                      width={400}
                      height={200}
                    />

                    <div className="international-content">
                      <div className="tour-offer bg-info">70% Off</div>
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          London
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1"></i> 17
                          Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2"></i>{" "}
                          <span>26+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
