import React from 'react'
import Header from '../../components/comman/header'
import Footer from '../../components/comman/footer'
import Hero from '../../components/home/hero'
import Card from '../../components/Card'
const product = [
    {
        img: "/images/product-3.png",
        title: "Ergonomic Chair",
        price: 70.54
    },
    {
        img: "/images/product-2.png",
        title: "Kruzo Aero Chair",
        price: 80.50
    },

    {
        img: "/images/product-1.png",
        title: "Nordic Chair",
        price: 50.80
    },
    {
        img: "/images/product-3.png",
        title: "Ergonomic Chair",
        price: 70.54
    },
    {
        img: "/images/product-3.png",
        title: "Ergonomic Chair",
        price: 70.54
    },
]
function Shop() {
    return (
        <>
            <Header page="Shop" />
            <Hero title="Shop" />
            <div className="product-section">
                <div className='container'>
                    <div className='row'>
                        {
                            product.map(function (item) {
                                return (
                                    <>
                                        <Card img={item.img} title={item.title} price={item.price} />
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Shop
