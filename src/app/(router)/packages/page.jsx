"use client"
import Image from 'next/image'
import React from 'react'
import PackagesList from './_components/PackagesList'

const Packages = () => {
  return (
   <>
      <div className="container-fluid packages py-5" data-aos="fade-up">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: "900px"}}>
                    <h5 className="section-title px-3">Packages</h5>
                    <h1 className="mb-0">Awesome Packages</h1>
                </div>
                {/* show skeleton when pakadges are loading */}
                
                <div className="packages-carousel owl-carousel">
                    <PackagesList/>
                </div>
                
            </div>
        </div>
   </>
  )
}

export default Packages