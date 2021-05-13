import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'
import { Link } from 'react-router-dom'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
    products
}) => {
    return (
        <>
            <h1 className="page-title">Cart Page</h1>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
                products = {products}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
            <Link to="/checkout">Proceed to checkout</Link>
        </>
    )
}
export default CartPage