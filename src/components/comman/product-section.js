import Card from "../Card"

const product = [
    {
        img: "/images/product-1.png",
        title: "Nordic Chair",
        price: 50.80
    },
    {
        img: "/images/product-2.png",
        title: "Kruzo Aero Chair",
        price: 80.50
    },
    {
        img: "/images/product-3.png",
        title: "Ergonomic Chair",
        price: 70.54
    },
]
function ProductSection() {
    return (
        <div className="product-section">
            <div className="container">
                <div className="row">

                    {/* <!-- Start Column 1 --> */}
                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                        <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                            vulputate velit imperdiet dolor tempor tristique. </p>
                        <p><a href="shop.html" className="btn">Explore</a></p>
                    </div>
                    {
                        product?.map((item, key) => {
                            return <Card key={key} img={item?.img} title={item?.title} price={item?.price} />
                        })
                    }

                </div>
            </div>
        </div>
    )
}
export default ProductSection