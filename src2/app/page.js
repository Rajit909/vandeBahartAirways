'use client'
import { useEffect, useState } from "react";
import HomePage from "./home/page"
import Loading from "./loading"



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

    {
      loading ? (
        <Loading/>
      ) : (
    <div>
      <main> 
        <HomePage/>
         </main>
    </div>
     )}
    </>
  );
  }