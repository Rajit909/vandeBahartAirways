'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";


const NavBar = () => {
   return (
    <>
       <div className="container-fluid bg-primary px-5 d-none d-lg-block text-gray-500">
            <div className="row gx-0">
                <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center">
                        <a href="#"><small className="me-3 text-light"><i className="fa fa-user me-2"></i>Register</small></a>
                        <a href="#"><small className="me-3 text-light"><i className="fa fa-sign-in-alt me-2"></i>Login</small></a>
                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown"><small><i className="fa fa-home me-2"></i> My Dashboard</small></a>
                            <div className="dropdown-menu rounded">
                                <a href="#" className="dropdown-item"><i className="fas fa-user-alt me-2"></i> My Profile</a>
                                <a href="#" className="dropdown-item"><i className="fas fa-comment-alt me-2"></i> Inbox</a>
                                <a href="#" className="dropdown-item"><i className="fas fa-bell me-2"></i> Notifications</a>
                                <a href="#" className="dropdown-item"><i className="fas fa-cog me-2"></i> Account Settings</a>
                                <a href="#" className="dropdown-item"><i className="fas fa-power-off me-2"></i> Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link href={"/"} className="navbar-brand">
                    {/* <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>VandeBharat Airways</h1> */}
                    <Image src="/images/vblogo2.png" alt="VandeBharat Airways" width={140} height={90} />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link href={"/"} className="nav-item nav-link ">Home</Link>
                        <Link href={"/about"} className="nav-item nav-link">About</Link>
                        <Link href={"/services"} className="nav-item nav-link">Services</Link>
                        <Link href={"/packages"} className="nav-item nav-link">Packages</Link>
                        <Link href={"/blog"} className="nav-item nav-link">Blog</Link>
                        <Link href={"/contact"} className="nav-item nav-link">Contact</Link>

                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                            <div className="dropdown-menu m-0">
                                <Link href={"/destinations"} className="dropdown-item">Destination</Link>
                                <Link href={"/tour"} className="dropdown-item">Explore Tour</Link>
                                <Link href={"/gallery"} className="dropdown-item">Our Gallery</Link>
                                </div>
                        </div>

                    </div>
                    <Link href={"/career"} className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">CAREER</Link>

                    {/* <Link href={"/bookings"} className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</Link> */}
                </div>
            </nav>
      </div>
    </>
  );
};

export default NavBar;