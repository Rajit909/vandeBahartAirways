"use client";

import About from "./(router)/_components/About";
import Destinations from "./(router)/destinations/page";
import Hero from "./(router)/_components/Hero";
import Services from "./(router)/services/page";
import Tour from "./(router)/tour/page";
import Packages from "./(router)/packages/page";
import Gallery from "./(router)/gallery/page";
import Bookings from "./(router)/bookings/page";
// import Guides from "./(router)/guides/page";
// import Testimonials from "./(router)/testemonials/page";
import Subscribe from "./(router)/_components/Subscribe";
import { useEffect, useState } from "react";
import Loading from "./(router)/loading";
import Image from "next/image";
// import Blog from "./(router)/blog/page";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    // Simulate data fetching (replace with your actual data fetching logic)
    setTimeout(() => {
      // Assume data is fetched after 2 seconds
      setData(/* your fetched data */);
      setLoading(false); // Set loading to false when data fetching is complete
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <main>
            {/* hero */}
            <Hero />
            
            {/* About */}
            <About/>

            {/* Services */}
            <Services />

            {/* destinations */}
            <Destinations />

            {/* packages */}
            <Packages />

            {/* Tour */}
            <Tour />

            {/* Gallery */}
            <Gallery />

            {/* BOkkings */}
            <Bookings />

            {/* Guides */}
            {/* <Guides/> */}

            {/* blogs */}
            {/* <Blog/> */}

            {/* testimonials */}
            {/* <Testimonials/> */}

            {/* Subscribe form */}
            <Subscribe />
          </main>
        </div>
      )}
    </>
  );
}
