import Image from "next/image";
import React from "react";

const DestinationItem = ({ url, photosCount, name }) => {
  return (
    <>
      <div className="destination-img ">
        <div className="search-icon">
          <a href={url} data-lightbox="destination-1">
            <Image
              className="img-fluid rounded w-100"
              src={url}
              alt="destination"
              width={400}
              height={150}
              sizes="100vw"
            />
          </a>
        </div>

        <div className="destination-overlay p-4">
          <a
            href="#"
            className="btn btn-primary  rounded-pill border py-2 px-3"
          >
            {photosCount} Photos
          </a>
          <h4 className=" mb-2 mt-3">{name}</h4>
          <a href="#" className="btn-hover text-white">
            View All Place <i className="fa fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default DestinationItem;
