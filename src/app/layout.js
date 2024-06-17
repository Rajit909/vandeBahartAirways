// Import necessary components and styles
import Footer from "./(router)/_components/Navbar/Footer";
import NavBar from "./(router)/_components/Navbar/NavBar";
import "./globals.css";
import "/public/css/style.css";
import "/public/css/bootstrap.min.css";
import "/public/lib/owlcarousel/assets/owl.carousel.min.css";
import "/public/lib/lightbox/css/lightbox.min.css";

import Script from "next/script";
import Head from 'next/head';

import { SpeedInsights } from "@vercel/speed-insights/next"

// Metadata object without the viewport setting
export const metadata = {
  title: 'Vande Bharat Airways - Experience Luxury in the Skies',
  description: 'Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.',
  author: 'Vande Bharat Airways',
  keywords: ['Vande bharat airways', 'airways', 'airlines', 'flight booking'],
  canonical: 'https://vandebharatairways.com',
  og: {
    title: 'Vande Bharat Airways - Experience Luxury in the Skies',
    description: 'Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.',
    url: 'https://vandebharatairways.com',
    type: 'website',
    image: 'https://vandebharatairways.com/images/og-image.jpg'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vande Bharat Airways - Experience Luxury in the Skies',
    description: 'Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.',
    image: 'https://vandebharatairways.com/images/twitter-image.jpg'
  }
};

// Separate viewport settings function
export const generateViewport = () => {
  return 'width=device-width, initial-scale=1.0';
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={metadata.canonical} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

      </Head>
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <a href="#" className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top">
          <i className="fa fa-arrow-up"></i>
        </a>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
        <Script src="/lib/easing/easing.min.js" />
        <Script src="/lib/waypoints/waypoints.min.js" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" />
        <Script src="/lib/lightbox/js/lightbox.min.js" />
        <Script src="/js/main.js" strategy="lazyOnload" />

        <SpeedInsights/>
      </body>
    </html>
  );
}
