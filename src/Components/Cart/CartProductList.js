import React from 'react'
import {keys} from 'lodash'
import products, { getProductsObject } from '../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    removeProductFromCart,
    productsObject=getProductsObject(products),
    CartItem = CartProductListItem,
    changeProductQuantity
}) => {
    return (
        <div>
            {
                keys(productsInCart).map(productId => (
                    <CartItem
                        key = {productId}
                        product={productsObject[productId]}
                        productCount={productsInCart[productId]}
                        removeProductFromCart={removeProductFromCart}
                        changeProductQuantity={changeProductQuantity}
                    />
                ))
            }
        </div>
    )
}

export default CartProductList