"use client"
import Image from 'next/image'
import React from 'react'

const Guides = () => {
  return (
   <>
         <div className="container-fluid guide py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: "900px"}}>
                    <h5 className="section-title px-3">Travel Guide</h5>
                    <h1 className="mb-0">Meet Our Guide</h1>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="guide-item">
                            <div className="guide-img">
                                <div className="guide-img-efects">
                                    <Image src="/images/guide-1.jpg" className="img-fluid w-100 rounded-top" alt="Image" width={150} height={100} sizes='10vw'/>
                                </div>
                                <div className="guide-icon rounded-pill p-2">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="guide-title text-center rounded-bottom p-4">
                                <div className="guide-title-inner">
                                    <h4 className="mt-3">Full Name</h4>
                                    <p className="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="guide-item">
                            <div className="guide-img">
                                <div className="guide-img-efects">
                                    <Image src="/images/guide-2.jpg" className="img-fluid w-100 rounded-top" alt="Image" width={150} height={100} sizes='10vw'/>
                                </div>
                                <div className="guide-icon rounded-pill p-2">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="guide-title text-center rounded-bottom p-4">
                                <div className="guide-title-inner">
                                    <h4 className="mt-3">Full Name</h4>
                                    <p className="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="guide-item">
                            <div className="guide-img">
                                <div className="guide-img-efects">
                                    <Image src="/images/guide-3.jpg" className="img-fluid w-100 rounded-top" alt="Image" width={150} height={100} sizes='10vw'/>
                                </div>
                                <div className="guide-icon rounded-pill p-2">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="guide-title text-center rounded-bottom p-4">
                                <div className="guide-title-inner">
                                    <h4 className="mt-3">Full Name</h4>
                                    <p className="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="guide-item">
                            <div className="guide-img">
                                <div className="guide-img-efects">
                                    <Image src="/images/guide-4.jpg" className="img-fluid w-100 rounded-top" alt="Image" width={150} height={100} sizes='10vw'/>
                                </div>
                                <div className="guide-icon rounded-pill p-2">
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="guide-title text-center rounded-bottom p-4">
                                <div className="guide-title-inner">
                                    <h4 className="mt-3">Full Name</h4>
                                    <p className="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default Guides