"use client"
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import TourItem from "./TourItem";

const TourList = () => {
    const [tourList, setTourList] = useState([]);

    useEffect(()=>{
        getAllTourLists()
    },[])

    const getAllTourLists = ()=>{
       GlobalApi.getAllTourList().then(res=>{
              console.log(res.tourLists[0]?.banner?.url)
              setTourList(res.tourLists)
         }
         )
    }

  return (
    <>
     {tourList?.length > 0
          ? tourList.map((item, index) => (
            
              <div key={index} >
                <TourItem  tour={item} />
              </div>
              
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <div
                key={index}
                className="w-full h-[280px] rounded-xl bg-slate-200 animate-pulse"
              >
                <div className=" h-36 rounded-t-xl bg-slate-300 m-4"></div>
                <div className=" w-40 rounded-xl h-6 bg-slate-300 ml-4 "></div>
                <div className="ml-4 flex items-center mt-4">
                  <div className=" rounded-[50%] bg-slate-300 h-10 w-10"></div>
                  <div className=" ml-5 w-36 bg-slate-300 h-6 rounded-xl"></div>
                  
                </div>
              </div>
            ))}
      <div className="row g-4">
        
      </div>
    </>
  );
};

export default TourList;
