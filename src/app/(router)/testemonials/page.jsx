"use client"
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <>
          <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{maxWidth: "900px"}}>
                    <h5 className="section-title px-3">Testimonial</h5>
                    <h1 className="mb-0">Our Clients Say!!!</h1>
                </div>
                <div className="testimonial-carousel owl-carousel">
                    <div className="testimonial-item text-center rounded pb-4">
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <Image src="/images/testimonial-1.jpg" className="img-fluid rounded-circle" alt="Image" width={150} height={100}/>
                        </div>
                        <div style={{marginTop: "-35px"}}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center rounded pb-4">
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <Image src="/images/testimonial-2.jpg" className="img-fluid rounded-circle" alt="Image" width={150} height={100}/>
                        </div>
                        <div style={{marginTop: "-35px"}}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center rounded pb-4">
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <Image src="/images/testimonial-3.jpg" className="img-fluid rounded-circle" alt="Image" width={150} height={100}/>
                        </div>
                        <div style={{marginTop: "-35px"}}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center rounded pb-4">
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <Image src="/images/testimonial-4.jpg" className="img-fluid rounded-circle" alt="Image" width={150} height={100}/>
                        </div>
                        <div style={{marginTop: "-35px"}}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials