"use client"
import Image from 'next/image'
import React from 'react'
import GalleryList from './_components/GalleryList'
const Gallery = () => {
  return (
    <>
         <div className="container-fluid gallery py-5 my-5">
            <div className="mx-auto text-center mb-5" style={{maxWidth: "900px"}}>
                <h5 className="section-title px-3">Our Gallery</h5>
                <h1 className="mb-4">Tourism & Traveling Gallery.</h1>
                <p className="mb-0">
                The pertinent identifying elements of India&apos;s nationalism, Culture & Heritage represent the heart and soul of the Country in its retrospective magnitude. The fragrance of India&apos;s inherent ethnic essence lingers to mesmerize the world at large.
                </p>
            </div>
            <div className="tab-className text-center">
                {/* <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                    <li className="nav-item">
                        <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                            <span className="text-dark" style={{width: "150px"}}>All</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                            <span className="text-dark" style={{width: "150px"}}>World tour</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                            <span className="text-dark" style={{width: "150px"}}>Ocean Tour</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                            <span className="text-dark" style={{width: "150px"}}>Summer Tour</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                            <span className="text-dark" style={{width: "150px"}}>Sport Tour</span>
                        </a>
                    </li>
                </ul> */}
                <div className="tab-content">
                    <div id="GalleryTab-1" className="tab-pane fade show p-0 active" >
                        {/* <div className="row g-2">
                            
                        </div> */}
                        <GalleryList/>
                    </div>
                  
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery