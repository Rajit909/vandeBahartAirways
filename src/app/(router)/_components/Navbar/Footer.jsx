import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer py-2">
        <div className="container ">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Get In Touch</h4>
                <a href="">
                  <i className="fas fa-home me-2"></i> Gurugram, Haryana
                  India
                </a>
                <a href="">
                  <i className="fas fa-envelope me-2"></i>{" "}
                  hr@vandebharatairways.com | info@vandebharatairways.com
                </a>
                {/* <a href="">
                  <i className="fas fa-phone me-2"></i> +91 8954716427
                </a>
                <a href="" className="mb-3">
                  <i className="fas fa-print me-2"></i> +91 90586 41767
                </a> */}
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-white me-2"></i>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Company</h4>

                <Link href={"/"}>
                  {" "}
                  <i className="fas fa-angle-right me-2"></i>Home
                </Link>
                <Link href={"/about"}>
                  {" "}
                  <i className="fas fa-angle-right me-2"></i>About
                </Link>
                <Link href={"/services"}>
                  {" "}
                  <i className="fas fa-angle-right me-2"></i>Services
                </Link>
                <Link href={"/packages"}>
                  {" "}
                  <i className="fas fa-angle-right me-2"></i>Packages
                </Link>
                <Link href={"/blog"}>
                  {" "}
                  <i className="fas fa-angle-right me-2"></i>Blog
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Support</h4>
                <Link href={"/contact"}>
                  {" "}
                  <i className="fas fa-angle-right me-2"></i>Contact
                </Link>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Legal Notice
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Privacy Policy
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Terms and
                  Conditions
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <div className="row gy-3 gx-2 mb-4">
                    </div>
                <h4 className="text-white mb-3">Find Here...</h4>

                <iframe
            
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112185.38466410474!2d77.4186482649414!3d28.515866867095358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718211039817!5m2!1sen!2sin"
                  width="450"
                  height="350"
                  style={{ border: "5px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <h4 className="text-white mb-3">Payments</h4>
                            <div className="footer-bank-card">
                                <a href="#" className="text-white me-2"><i className="fab fa-cc-visa fa-2x"></i></a>
                                <a href="#" className="text-white me-2"><i className="fas fa-credit-card fa-2x"></i></a>
                                <a href="#" className="text-white me-2"><i className="fab fa-cc-mastercard fa-2x"></i></a>
                                <a href="#" className="text-white me-2"><i className="fab fa-cc-paypal fa-2x"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-google-pay fa-2x "></i></a>
                            </div> */}
              
              </div>
            </div>
        <div className="container-fluid copyright text-body py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-end mb-md-0">
                        <i className="fas fa-copyright me-2"></i><a className="text-white" href="#">Vande Bharat Airways</a>, All right reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        Designed By <a className="text-white" href="https://htmlcodex.com">HTML Codex | Managed by (BTS)</a>
                    </div>
                </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
