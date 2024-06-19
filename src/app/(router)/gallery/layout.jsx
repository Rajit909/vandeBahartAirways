import React from "react";

export const metadata = {
    title: 'Gallery',
    description:"Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.",
}

export default function GalleryLayout({ children }) {
    return(
        <>
        <main>
            {children}
        </main>
        </>
    )

    }
