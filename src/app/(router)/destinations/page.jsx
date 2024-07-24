"use client"
import React from "react";
import DestinationList from "./_components/destinationList.jsx";



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
