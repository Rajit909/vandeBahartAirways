import Image from "next/image";
import React from "react";

const DestinationItem = ({url, photosCount, name}) => {
  return (
    <>

              <div className="destination-img ">
                  <Image
                    className="img-fluid rounded w-100"
                    src={url}
                    alt="destination"
                    width={400}
                    height={150}
                  />

                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn02.3 btn-primary  rounded-pill border py-2 px-3"
                    >
                     {photosCount} Photos
                    </a>
                    <h4 className=" mb-2 mt-3">{name}</h4>
                 
                  
                  </div>
              </div>
            
         
      
    </>
  );
};

export default DestinationItem;
