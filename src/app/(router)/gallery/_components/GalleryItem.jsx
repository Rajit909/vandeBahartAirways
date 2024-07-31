import Image from "next/image";
import React from "react";

const GalleryItem = ({url, title}) => {
  return (
      <div
        className="col-sm-6 col-md-6 col-lg-4 col-xl-2"
        data-aos="fade-up"
        data-aos-easing="ease-in"
      >
        <div className="gallery-item h-100">
          <Image
            src={url}
            className="img-fluid w-100 h-100 rounded"
            alt="Image"
            width={100}
            height={50}
            sizes="100vw"
          />
          <div className="gallery-content">
            <div className="gallery-info">
              <h5 className="text-white text-uppercase mb-2">{title}</h5>
              <a href="#" className="btn-hover text-white">
                View All Place <i className="fa fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
          <div className="gallery-plus-icon">
            <a
              href="img/gallery-1.jpg"
              data-lightbox="gallery-1"
              className="my-auto"
            >
              <i className="fas fa-plus fa-2x text-white"></i>
            </a>
          </div>
        </div>
      </div>
  );
};

export default GalleryItem;
