import Footer from "./(router)/_components/Navbar/Footer";
import NavBar from "./(router)/_components/Navbar/NavBar";
import "./globals.css";
import "/public/css/style.css";
import "/public/css/bootstrap.min.css";
import "/public/lib/owlcarousel/assets/owl.carousel.min.css";
import "/public/lib/lightbox/css/lightbox.min.css";
// import "/public/scss/bootstrap.scss";
// import "/public/scss/";


import Script from "next/script";


export const metadata = {
  title: "Vande Bharat Airways",
  description: "Learn to build!",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">

        
    <head>
      
       
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

    </head>
        <body>
       
          <NavBar />
              <main>{children}</main>
          <Footer/>
          <a href="#" className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"><i className="fa fa-arrow-up"></i></a>   


        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
        <Script src="/lib/easing/easing.min.js" />
        <Script src="/lib/waypoints/waypoints.min.js" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" />
        <Script src="/lib/lightbox/js/lightbox.min.js" />

          <Script
          src="/js/main.js"
          strategy="lazyOnload"
          
        />
        </body>
      </html>
  );
}
