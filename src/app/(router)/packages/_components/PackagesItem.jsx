import Image from "next/image";
import React from "react";
// import ComingSoonModal from "./CommingSoonModal";

const PackagesItem = ({ url, location, title, dur, person, price, desc }) => {
  // const [showModal, setShowModal] = useState(false);

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };
  return (
    <>
      <div className="packages-item">
        <div className="packages-img">
          <Image
            src={url}
            className="img-fluid w-100 rounded-top"
            alt="Image"
            width={100}
            height={50}
            sizes="150vw"
          />
          <div
            className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
            style={{ width: "100%", bottom: "0", left: "0", zIndex: "5" }}
          >
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt me-2"></i> {location}{" "}
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt me-2"></i>
              {dur}
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user me-2"></i> {person}
            </small>
          </div>
          {/* <div className="packages-price py-2 px-4">₹{price}</div> */}
        </div>
        <div className="packages-content bg-light">
          <div className="p-4 pb-0">
            <h5 className="mb-0">{title}</h5>
            <small className="text-uppercase">Hotel Deals</small>
            <div className="mb-3">
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
            </div>
            <p className="mb-4">{desc}</p>
          </div>
          <div className="row bg-primary rounded-bottom mx-0">
            <div className="col-6 text-start px-0">
              <a href="#" className="btn-hover btn text-white py-2 px-4">
                Read More
              </a>
            </div>
            <div className="col-6 text-end px-0">
              <button
                className="btn-hover btn text-white py-2 px-4"
            
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        {/* <ComingSoonModal show={showModal} onClose={handleCloseModal}>
        <div className=" text-center">
            <h1>Flight Booking Coming Soon...</h1>
        </div>
      </ComingSoonModal> */}
      </div>
    </>
  );
};

export default PackagesItem;
