import React from "react";

export const metadata = {
    title: 'Bookings',
    description:"Fly with Vande Bharat Airways for a luxurious and comfortable travel experience. Discover our premium services and book your flight today.",
}

export default function BookingsLayout({ children }) {
    return(
        <>
        <main>
            {children}
        </main>
        </>
    )

    }
