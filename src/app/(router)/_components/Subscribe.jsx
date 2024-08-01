import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="container-fluid subscribe py-5">
        <div className="container text-center py-5">
          <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
            <div data-aos="fade-up">
            <h5 className="subscribe-title px-3">Subscribe</h5>
            <h1 className="text-white mb-4">Our Newsletter</h1>
            </div>
            <p className="text-white mb-5" data-aos="fade-up">
              Subscribe to our newsletter to get travel inspiration, tips and
              advice by email, as well as being the first to learn about
              exciting new tours and destinations. Subscribing to a newsletter
              is a great way to receive curated content directly in your email
              inbox. We are here to share a list of publications that send
              up-to-date news and exciting content to help your business thrive.
              You can get insights on industry trends, entrepreneurial tips, and
              find motivation as a travel business owner.
            </p>
            <div className="position-relative mx-auto" data-aos="fade-up">
              <input
                className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
