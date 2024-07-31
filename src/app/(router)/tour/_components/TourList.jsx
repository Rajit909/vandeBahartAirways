"use client"
import GlobalApi from "../../../_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import TourItem from "./TourItem";
import "./style.css"
import Script from "next/script";

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
     {tourList?.length >0
          ? tourList.map((item, index) => (
            
              <div key={index} >
                <TourItem  tour={item} />
              </div>
              
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            
            <div
            key={index}
            className="w-full h-[280px] rounded-xl bg-slate-400 animate-pulse"
            >
            <Script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"/>
                <div className="relative top-48 left-32">
                  <div className=" rounded-xl relative left-14 bg-slate-300 h-6 mb-2 w-20"></div>
                  <div className=" ml-5 w-36 bg-slate-300 h-6 rounded-xl"></div>
                  
                </div>
              </div>
            ))}

    </>
  );
};

export default TourList;
