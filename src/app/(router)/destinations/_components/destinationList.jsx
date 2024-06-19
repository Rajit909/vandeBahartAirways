
import React from "react";
import DestinationItem from "./destinationItem";

const DestinationList = () => {
  return (
    <>
    
      <div className="row g-4">
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest1.jpg"}
            photosCount={12}
            name={"Gwalior"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest2.jpg"}
            photosCount={12}
            name={"Ayodhyya"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest3.jpg"}
            photosCount={12}
            name={"Agra"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest4.jpg"}
            photosCount={12}
            name={"Delhi"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest5.jpg"}
            photosCount={12}
            name={"Himachal pradesh"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest6.jpg"}
            photosCount={12}
            name={"Lddakh"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest7.jpg"}
            photosCount={12}
            name={"Kedarnath"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest8.jpg"}
            photosCount={12}
            name={"Kashi"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest9.jpg"}
            photosCount={12}
            name={"Gujrat"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest10.jpg"}
            photosCount={12}
            name={"Hydrabad"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest11.jpg"}
            photosCount={12}
            name={"Tamilnadu"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest12.jpg"}
            photosCount={12}
            name={"Kolkata"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest13.jpg"}
            photosCount={12}
            name={"Mumbai"}
          />
        </div>
        <div className="col-lg-4">
          <DestinationItem
            url={"/images/dest/dest14.jpg"}
            photosCount={12}
            name={"Goa"}
          />
        </div>
      </div>
    </>
  );
};

export default DestinationList;
