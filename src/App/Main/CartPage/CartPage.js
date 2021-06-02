import React from 'react'
import {connect} from 'react-redux'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'
import { Link } from 'react-router-dom'

import './cartPage.css'

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
            <div className="cart-total">
                <CartTotal
                    productsInCart={productsInCart}
                />
            </div>
            <div className="checkout-block">
                <button className="checkout-btn">
                    <Link to="/checkout" className="checkout-link">Procced to checkout</Link>
                </button>
            </div>
        </>
    )
}
const mapState = state => ({
    productsInCart:state.productsInCart
})

export default connect(
    mapState
)(CartPage)