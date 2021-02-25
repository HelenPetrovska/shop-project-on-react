import React from 'react'
import {keys} from 'lodash'
import products from '../../Main/Products/products'

import "./cart.css"


const Cart = ({
    productsInCart
}) => {
    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId) => (
                    <div key = {productId}>{products[productId-1].name}: {productsInCart[productId]}</div>
                ))
            }
        </div>
    )
}

export default Cart
