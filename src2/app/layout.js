// Import necessary components and styles
import "./globals.css";

// Metadata object without the viewport setting
// export const metadata = {
//   title:{
//    default : "Vande Bharat Airways |  Experience Luxury in the Skies",
//    template : `%s | Vande Bharat Airways |  Experience Luxury in the Skies`
//   },
//    description:
//     "Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.",
//   author: [
//     {name: "Vande Bharat Airways"},
//     {name: "Rajit-kumar", url: "https://rajit-kumar.github.io"}
//   ],
//   keywords: ["Vande bharat airways", "airways", "airlines", "flight booking"],
//   creator: "Vande Bharat Airways",
//   canonical: "https://vandebharatairways.com",
//   og: {
//     title: "Vande Bharat Airways - Experience Luxury in the Skies",
//     description:
//       "Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.",
//     url: "https://vandebharatairways.com",
//     type: "website",
//     image: "https://vandebharatairways.com/images/og-image.jpg",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Vande Bharat Airways - Experience Luxury in the Skies",
//     description:
//       "Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.",
//     image: "https://vandebharatairways.com/images/twitter-image.jpg",
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://vandebharatairways.com",
//     site_name: "Vande Bharat Airways",
//   },
//   verification: {
//     google: "phIzV2yZ3mu6Z0OGl51Hn9PgYTAOuK8-jfwq1OnugaE",
//   }
// };

// // Separate viewport settings function for Next.js best practices
// export const generateViewport = () => {
//   return "width=device-width, initial-scale=1.0";
// };

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
         
      <body>
        {/* <NavBar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
        {/* <a
          href="#"
          className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
        >
          <i className="fa fa-arrow-up"></i>
        </a> */}

      </body>
    </html>
  );
}