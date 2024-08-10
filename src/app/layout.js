// Import necessary components and styles
import Footer from "./(router)/_components/Navbar/Footer";
import NavBar from "./(router)/_components/Navbar/NavBar";
import "./globals.css";
import "/public/lib/owlcarousel/assets/owl.carousel.min.css";
import "/public/lib/lightbox/css/lightbox.min.css";
import "/public/css/bootstrap.min.css";
import "/public/css/style.css";
import NextTopLoader from 'nextjs-toploader';
import ChatSupport from './(router)/_components/ChatSupport/ChatSupport'


import Script from "next/script";
import Head from "next/head";
import { AOSInit } from "./(router)/_components/AOS";

// Metadata object without the viewport setting
export const metadata = {
  title:{
   default : "Vande Bharat Airways |  Experience Luxury in the Skies",
   template : `%s | Vande Bharat Airways |  Experience Luxury in the Skies`
  },
   description:
    "Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.",
  author: [
    {name: "Vande Bharat Airways"},
    {name: "Rajit-kumar", url: "https://rajit-kumar.github.io"}
  ],
  keywords: ["Vande bharat airways", "airways", "airlines", "flight booking"],
  creator: "Vande Bharat Airways",
  canonical: "https://vandebharatairways.com",
  og: {
    title: "Vande Bharat Airways - Experience Luxury in the Skies",
    description:
      "Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.",
    url: "https://vandebharatairways.com",
    type: "website",
    image: "https://vandebharatairways.com/images/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vande Bharat Airways - Experience Luxury in the Skies",
    description:
      "Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.",
    image: "https://vandebharatairways.com/images/twitter-image.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vandebharatairways.com",
    site_name: "Vande Bharat Airways",
  },
  verification: {
    google: "phIzV2yZ3mu6Z0OGl51Hn9PgYTAOuK8-jfwq1OnugaE",
  }
};

// Separate viewport settings function for Next.js best practices
export const generateViewport = () => {
  return "width=device-width, initial-scale=1.0";
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content={generateViewport()} />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={metadata.canonical} />
        
        <link rel="" href="/favicon.ico" />


        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image" content={metadata.og.image} />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vande Bharat Airways",
            "url": "https://vandebharatairways.com",
            "logo": "https://vandebharatairways.com/images/vblogo1.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 9058641767",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.facebook.com/vandebharatairways",
              "https://www.twitter.com/vandebharatairways",
              "https://www.instagram.com/vandebharatairways"
            ],
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://vandebharatairways.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://vandebharatairways.com/about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Destinations",
                  "item": "https://vandebharatairways.com/destinations"
                }
              ]
            }
          })
        }} />        

        
      </Head>
      
      <body>
        <NextTopLoader 
        color="white" 
        showSpinner={false}
        height={5}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <NavBar />
        {/* aosinit */}
        <AOSInit/>
        <main>{children}</main>
        <Footer />
        <a
          href="#"
          className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
        >
          <i className="fa fa-arrow-up btn-md-square"></i>
        </a>
        <div
          className="chat-support"
        >
          <ChatSupport/>
        </div>
        
        {/* JavaScript Libraries and Scripts */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
        <Script src="/lib/easing/easing.min.js" />
        <Script src="/lib/waypoints/waypoints.min.js" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" />
        <Script src="/lib/lightbox/js/lightbox.min.js" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}