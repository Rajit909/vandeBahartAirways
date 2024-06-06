import Footer from "./(router)/_components/Navbar/Footer";
import NavBar from "./(router)/_components/Navbar/NavBar";
import "./globals.css";
import "/public/css/style.css";
import "/public/css/bootstrap.min.css";
import "/public/lib/owlcarousel/assets/owl.carousel.min.css";
import "/public/lib/lightbox/css/lightbox.min.css";


import Script from "next/script";


export const metadata = {
  title: "Vande Bharat Airways",
  description: "Learn to build!",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">

        
    <head>
      
        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Roboto&display=swap" rel="stylesheet" /> 

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

    </head>
        <body>
       
          <NavBar />
              <main>{children}</main>
          <Footer/>
{/* 
          <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.6/umd/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.min.js"
          strategy="beforeInteractive"
        /> */}

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/lib/easing/easing.min.js"></script>
        <script src="/lib/waypoints/waypoints.min.js"></script>
        <script src="/lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="/lib/lightbox/js/lightbox.min.js"></script>

          <Script
          src="/js/main.js"
          strategy="lazyOnload"
        />
        </body>
      </html>
  );
}
