'use client'

import About from "./(router)/about/page";
import Destinations from "./(router)/destinations/page";
import Hero from "./(router)/hero/page";
import Services from "./(router)/services/page";
import Tour from "./(router)/tour/page";
import Packages from "./(router)/packages/page";
import Gallery from "./(router)/gallery/page";
import Bookings from "./(router)/bookings/page";
import Guides from "./(router)/guides/page";
import Testimonials from "./(router)/testemonials/page";
import Subscribe from "./(router)/subscribe/page";
// import Blog from "./(router)/blog/page";




export default function Home() {
  

  return (
    <>    
    <div>
      <main> 
        {/* hero */}
        <Hero/>

        {/* About */}
        <About/>

        {/* Services */}
        <Services/>

        {/* destinations */}
        <Destinations/>

        {/* Tour */}
        <Tour/>

        {/* packages */}
        <Packages/>

        {/* Gallery */}
        <Gallery/>

        {/* BOkkings */}
        <Bookings/>

        {/* Guides */}
        <Guides/>

        {/* blogs */}
        {/* <Blog/> */}

        {/* testimonials */}
        <Testimonials/>

        {/* Subscribe form */}
        <Subscribe/>

      </main>
    </div>
    </>
  );
  }