import Image from 'next/image'
import React from 'react'

const BlogItem = ({Imgurl, title, description, auther}) => {
  return (
    <>
    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <div className="blog-img-inner">
                                    <Image className="img-fluid w-100 rounded-top" src={Imgurl} alt="Image" width={150} height={100} sizes='100vw'/>
                                    <div className="blog-icon">
                                        <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                    <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                                    <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2"></i>1K</a>
                                </div>
                            </div>
                            <div className="blog-content border border-top-0 rounded-bottom p-4">
                                <p className="mb-3">Posted By: {auther} </p>
                                <a href="#" className="h4">{title}</a>
                                <p className="my-3">{description}</p>
                                <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default BlogItem