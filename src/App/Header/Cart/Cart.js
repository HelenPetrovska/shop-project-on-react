import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import CartTotal from '../../../Components/Cart/CartTotal'

import "./cart.css"
import CartProductList from '../../../Components/Cart/CartProductList'

const Cart = ({
    productsInCart,
}) => {
    return (
        <div className="cart text-center">
            <CartTotal
                productsInCart={productsInCart}
            />
            <Link to="/cart">Show cart</Link>
        </div>
    )
}

const mapState = state => ({
    productsInCart:state.productsInCart
})

export default connect(
    mapState
)(Cart)
