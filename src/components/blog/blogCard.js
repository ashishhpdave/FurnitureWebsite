import React from 'react'
const data = [
    {
        img: "/images/post-1.jpg",
        title: 'First Time Home Owner Ideas',
        owner: 'Kristin Watson',
        date: 'Dec 19, 2021'
    },
    {
        img: "/images/post-2.jpg",
        title: 'How To Keep Your Furniture Clean',
        owner: 'Robert Fox',
        date: 'Dec 15, 2021'
    },
    {
        img: "/images/post-3.jpg",
        title: 'Small Space Furniture Apartment Ideas',
        owner: 'Kristin Watson',
        date: 'Dec 12, 2021'
    },
    {
        img: "/images/post-1.jpg",
        title: 'First Time Home Owner Ideas',
        owner: 'Kristin Watson',
        date: 'Dec 19, 2021'
    },
    {
        img: "/images/post-2.jpg",
        title: 'How To Keep Your Furniture Clean',
        owner: 'Robert Fox',
        date: 'Dec 15, 2021'
    },
    {
        img: "/images/post-3.jpg",
        title: 'Small Space Furniture Apartment Ideas',
        owner: 'Kristin Watson',
        date: 'Dec 12, 2021'
    },
]
const BlogCard = () => {
    return (
        <div className="blog-section">
            <div className="container">
                <div className="row">
                    {
                        data?.map((item, keys) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 mb-5">
                                    <div className="post-entry">
                                        <a href="#" className="post-thumbnail">
                                            <img src={item?.img} alt="Image" className="img-fluid" /></a>
                                        <div className="post-content-entry">
                                            <h3><a href="#">{item?.title}</a></h3>
                                            <div className="meta">
                                                <span>by <a href="#">{item?.owner}</a></span> <span>on <a href="#">{item.date}</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogCard
