import React from 'react'
import PackagesItem from './PackagesItem'

const PackagesList = () => {
    const images = [
        "/images/packages-4.jpg",
        "/images/packages-2.jpg",
        "/images/packages-3.jpg",
        "/images/packages-1.jpg",
    ]

    const descriptionList = [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat",
    ]
  return (
    <>
        <PackagesItem url={images[0]} location="Venice - Italy" title="Venice - Italy" dur="3 days" person="2 Person" price="349.00" desc={descriptionList[0]} />
        <PackagesItem url={images[1]} location="The New California" title="The New California" dur="3 days" person="2 Person" price="449.00" desc={descriptionList[1]} />
        <PackagesItem url={images[2]} location="Venice - Italy" title="Venice - Italy" dur="3 days" person="2 Person" price="349.00" desc={descriptionList[2]} />
        <PackagesItem url={images[3]} location="The New California" title="The New California" dur="3 days" person="2 Person" price="449.00" desc={descriptionList[3]} />
    </>
  )
}

export default PackagesList