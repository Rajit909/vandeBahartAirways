import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="carousel-header">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <Image
                src="/images/HD-wallpaper-tour-across-world-attractions-culture-travel-visit.jpg"
                className="Image-fluid"
                width={400}
                height={400}
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Explore The World
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                    Let&apos;s Explore  The World Together!
                  </h1>
                  <p className="mb-5 fs-5">
                  	Unleash your wanderlust, tour the world. Your passport to extraordinary experiences.Crafting unforgettable journeys, one adventure at a time. 

                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src="/images/Ms-Franc--768x548.jpg"
                className="Image-fluid"
                width={400}
                height={400}
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Adventure of a Lifetime
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                  Luxury or special experiences
                  </h1>
                  <p className="mb-5 fs-5">
                  Elevate your travel experience with us..
                  Uncover hidden gems with us. Journey beyond your imagination
                 </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src="/images/airplane-runway-night-with-lights-background_934652-4847.jpg"
                className="Image-fluid"
                width={400}
                height={400}
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                  Orient Your Action
                  </h1>
                  <p className="mb-5 fs-5">
                  Explore destinations that offer fun and excitement for the entire family. From theme parks to wildlife safaris, discover activities and tours that everyone will enjoy.
                 
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src="/images/Pp3QtR.jpg"
                className="Image-fluid"
                width={400}
                height={400}
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                  Focus on your discovery
                  </h1>
                  <p className="mb-5 fs-5">
                  Discover the world, in your way. 
                  Uncover hidden gems with us. Journey beyond your imagination. 

                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon btn bg-primary"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon btn bg-primary"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
