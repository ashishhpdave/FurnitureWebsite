import React from 'react'

function Card(data) {
    return (
        <div className="col-12 col-md-4 col-lg-3 mb-5 mt-4 mb-md-0">
            <a className="product-item" href="cart.html">
                <img src={data.img} className="img-fluid product-thumbnail" />
                <h3 className="product-title">{data.title}</h3>
                <strong className="product-price">$ {data.price}</strong>

                <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                </span>
            </a>
        </div>
    )
}

export default Card
