import React from 'react'
import PackagesItem from './PackagesItem'

const PackagesList = () => {
    const images = [
        "/images/dest/dest5.jpg",
        "/images/dest/dest2.jpg",
        "/images/dest/dest3.jpg",
        "/images/dest/dest6.jpg",
        
    ]

    const descriptionList = [
        "Manali is a hill station located in the state of Himachal Pradesh. The city is known for its rich culture and heritage.",
        "Agra is a city located in the state of Uttar Pradesh. The city is known for its rich culture and heritage. The city is also home to the famous Taj Mahal.",
        "Ayodhya is a city located in the state of Uttar Pradesh. The city is known for its rich culture and heritage. The city is also home to the famous Rama Temple.",
        "Laddakh is a hill station located in the state of Ladakh. The city is known for its rich culture and heritage. The city is also home to the famous Leh Ladakh. ",
    ]
  return (
    <>
        <PackagesItem url={images[0]} location="Manali - India" title="Manali - India" dur="3 days" person="2 Person"  desc={descriptionList[0]} />
        <PackagesItem url={images[2]} location="Agra - India" title="Agra - India" dur="2 days" person="2 Person"  desc={descriptionList[1]} />
        <PackagesItem url={images[1]} location="Ayodhya - India" title="Ayodhya - India" dur="3 days" person="2 Person"  desc={descriptionList[2]} />
        <PackagesItem url={images[3]} location="Laddakh - India" title="Laddakh - India" dur="3 days" person="2 Person"  desc={descriptionList[3]} />
    </>
  )
}

export default PackagesList