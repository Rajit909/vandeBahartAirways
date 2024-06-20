import Image from "next/image";
import React from "react";

const TourItem = ({tour}) => {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="national-item">
          <Image
            src={tour?.banner?.url}
            alt="banner"
            className="img-fluid w-100 rounded"
            width={100}
            height={50}
          />
          <div className="national-content">
            <div className="national-info">
              <h5 className="text-white text-uppercase mb-2">{tour?.name}</h5>
              <a href="#" className="btn-hover text-white">
                View All Place <i className="fa fa-arrow-right ms-2"></i>
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
    </>
  );
};

export default TourItem;
