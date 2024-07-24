"use client"
import React from "react";
import DestinationList from "./_components/destinationList.jsx";
import Image from "next/image.js";



const Destinations = () => {
  return (
    <>
      <div className="container-fluid ExploreTour py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: "900px"}}>
                    <h5 className="section-title px-3">Explore Destinations</h5>
                    <h1 className="mb-4">Top destinations</h1>
                </div>
                <div className="tab-className text-center">
                    {/* <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                        <li className="nav-item">
                            <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#NationalTab-1">
                                <span className="text-dark" style={{width: "250px"}}>National Tour Category</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#InternationalTab-2">
                                <span className="text-dark" style={{width: "250px"}}>International tour Category</span>
                            </a>
                        </li>
                    </ul> */}
                    <div className="tab-content" data-aos="fade-right">
                        <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                              <DestinationList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Destinations;
