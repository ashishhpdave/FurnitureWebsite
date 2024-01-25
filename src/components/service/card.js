import React from 'react'
const cardData = [
    {
        icon: "/images/truck.svg",
        title: 'Fast &amp; Free Shipping',
        desc: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
        icon: "/images/bag.svg",
        title: 'Easy to Shop',
        desc: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
        icon: "/images/support.svg",
        title: '24/7 Support',
        desc: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
        icon: "/images/return.svg",
        title: 'Hassle Free Returns',
        desc: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
        icon: "/images/truck.svg",
        title: 'Fast &amp; Free Shipping',
        desc: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
        icon: "/images/bag.svg",
        title: 'Easy to Shop',
        desc: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
        icon: "/images/support.svg",
        title: '24/7 Support',
        desc: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
        icon: "/images/return.svg",
        title: 'Hassle Free Returns',
        desc: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
]
const ServiceCard = () => {
    return (
        <div className="why-choose-section">
            <div className="container">
                <div className="row my-5">
                    {
                        cardData?.map((item, keys) => {
                            return (
                                <div className="col-6 col-md-6 col-lg-3 mb-4" key={keys}>
                                    <div className="feature">
                                        <div className="icon">
                                            <img src={item?.icon} alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3>{item?.title}</h3>
                                        <p>{item?.desc}</p>
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

export default ServiceCard
