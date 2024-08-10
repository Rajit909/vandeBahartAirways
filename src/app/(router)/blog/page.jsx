"use client"
import Image from 'next/image'
import React from 'react'
import BlogList from './_components/BlogList'


const Blog = () => {
  return (
    <>
         <div className="container-fluid blog py-5" data-aos="fade-left">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: "900px"}}>
                    <h5 className="section-title px-3">Our Blog</h5>
                    <h1 className="mb-4">Popular Travel Blogs</h1>
                    <p className="mb-0">
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                  <BlogList/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog