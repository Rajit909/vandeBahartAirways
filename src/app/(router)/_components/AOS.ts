"use client"
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 

export const AOSInit = () => {
    useEffect(()=>{
        AOS.init({
            once: true,
        })
    })
    return null;
}