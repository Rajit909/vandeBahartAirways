"use client"
import React from 'react'


  
const Bookings = () => {
  return (
   <>        
   
        <div className="container-fluid booking py-5" data-aos="fade-up">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h5 className="section-booking-title pe-3" >Booking</h5>
                        <h1 className="text-white mb-4">Online Booking</h1>
                        <div>

                       
                    <h1 className='text-warning text-center'>Comming Soon</h1>
                        </div>
                        {/* <a href="#" className="btn btn-light text-primary rounded-pill py-3 px-5 mt-2">Read More</a> */}
                    </div>
                    {/* <div className="col-lg-6">
                        <h1 className="text-white mb-3">Book A Tour Deals</h1>
                        <p className="text-white mb-4">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-white border-0" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control bg-white border-0" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" className="form-control bg-white border-0" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                        <label for="datetime">Date & Time</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select bg-white border-0" id="select1">
                                            <option value="1">Destination 1</option>
                                            <option value="2">Destination 2</option>
                                            <option value="3">Destination 3</option>
                                        </select>
                                        <label for="select1">Destination</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select bg-white border-0" id="SelectPerson">
                                            <option value="1">Persons 1</option>
                                            <option value="2">Persons 2</option>
                                            <option value="3">Persons 3</option>
                                        </select>
                                        <label for="SelectPerson">Persons</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select bg-white border-0" id="CategoriesSelect">
                                            <option value="1">Kids</option>
                                            <option value="2">1</option>
                                            <option value="3">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <label for="CategoriesSelect">Categories</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control bg-white border-0" placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                                        <label for="message">Special Request</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary text-white w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
   </>
  )
}

export default Bookings