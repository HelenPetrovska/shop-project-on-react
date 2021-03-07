import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'

const CartPage = ({
    productsInCart,
}) => {
    return (
        <>
            <h1 className="page-title">Cart Page</h1>
            <CartProductList
                productsInCart={productsInCart}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
        </>
    )
}
export default CartPage