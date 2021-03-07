import React from 'react'
import {keys} from 'lodash'
import products, { getProductsObject } from '../../Main/Products/products'
import { Link } from 'react-router-dom'
import CartTotal from '../../../Components/Cart/CartTotal'

import "./cart.css"


const Cart = ({
    productsInCart,
    productsObject=getProductsObject(products)
}) => {
    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId) => (
                    <div key = {productId}>{productsObject[productId].name}: {productsInCart[productId]}</div>
                ))
            }
            <CartTotal
                productsInCart={productsInCart}
            />

            <Link to="/cart">Show cart</Link>
        </div>
    )
}

export default Cart
