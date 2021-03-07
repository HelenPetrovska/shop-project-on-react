import React from 'react'
import {keys} from 'lodash'
import products, { getProductsObject } from '../../App/Main/Products/products'

const CartProductList = ({
    productsInCart,
    productsObject=getProductsObject(products)
}) => {
    return (
        <div>
            {
                keys(productsInCart).map((productId) => (
                    <div key = {productId}>{productsObject[productId].name}: {productsInCart[productId]}</div>
                ))
            }
        </div>
    )
}

export default CartProductList