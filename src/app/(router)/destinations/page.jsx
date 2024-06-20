"use client"
import React from "react";
import DestinationList from "./_components/DestinationList.jsx";



const Destinations = () => {
  return (
    <>
      <div className="container-fluid destination py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Destination</h5>
            <h1 className="mb-0">Popular Destination</h1>
          </div>
          <div className="tab-className text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    All
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    USA
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Canada
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-4"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Europe
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-5"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    China
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-6"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Singapore
                  </span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
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
