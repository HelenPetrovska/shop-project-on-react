import React from 'react'

import "./cart.css"


const Cart = ({
    count,
    price
}) => {
    return (
        <div className="cart text-center">
            <div className="products-count">{count}</div>
            <div className="products-price">${price}</div>
        </div>
    )
}

export default Cart
