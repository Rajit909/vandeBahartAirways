import React from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
    const images = [
        "/images/blog-1.jpg",
        "/images/blog-2.jpg",
        "/images/blog-3.jpg",
    ]

    const titles = [
        "Latest Industry News: Mergers, Acquisitions, and Partnerships",
        "Airline Financial Performance and Market Analysis",
        "Impact of Global Events on the Aviation Industry"
      ]

      const desc = [
        "Stay updated with the latest happenings in the aviation world, including mergers, acquisitions, and partnerships that shape the future of air travel.",
        "Dive into detailed analyses of airline financials and market trends to understand the economic landscape of the aviation sector.",
        "Explore how global events such as pandemics, political changes, and economic shifts impact the aviation industry and air travel."
      ]
  return (
    <>
    <BlogItem Imgurl={images[0]} title={titles[0]} auther={"Amit kumar"} description={desc[0]} />
    <BlogItem Imgurl={images[1]} title={titles[1]} auther={"Anup singh"} description={desc[1]} />
    <BlogItem Imgurl={images[2]} title={titles[2]} auther={"Rohit"} description={desc[2]} />
    </>
  )
}

export default BlogList