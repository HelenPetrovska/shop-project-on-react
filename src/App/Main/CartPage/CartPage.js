import React from 'react'
import {keys} from 'lodash'
import products, { getProductsObject } from '../Products/products'
import CartTotal from '../../../Components/Cart/CartTotal'

const CartPage = ({
    productsInCart,
    productsObject=getProductsObject(products)
}) => {
    return (
        <>
            <h1 className="page-title">Cart Page</h1>
            {
                keys(productsInCart).map((productId) => (
                    <div key = {productId}>{productsObject[productId].name}: {productsInCart[productId]}:{productsObject[productId].price}</div>
                ))
            }
            <CartTotal
                productsInCart={productsInCart}
            />
        </>
    )
}
export default CartPage