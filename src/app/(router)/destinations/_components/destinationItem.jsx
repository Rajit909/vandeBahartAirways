import Image from "next/image";
import React from "react";

const DestinationItem = ({ url, photosCount, name }) => {
  return (
    <>
      <div className="national-item" data-aos="fade-up" data-aos-easing="ease-in">
        <Image
          src={url}
          className="img-fluid w-100 rounded"
          alt="Image"
          width={400}
          height={200}
          style={{maxHeight: "250px", minHeight:"249px"}}
        />
        <div className="national-content">
          <div className="national-info">
            <h5 className="text-white text-uppercase mb-2">{name}</h5>
            <h5 className="text-white mb-2">{photosCount} more Photos</h5>
            <a href="#" className="btn-hover text-white">
              View All Place <i className="fa fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
        <div className="national-plus-icon">
          <div className="gallery-plus-icon">
            <a
              href={url}
              data-lightbox="gallery-2"
              className="my-auto"
            >
              <i className="fas fa-plus fa-2x text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationItem;
