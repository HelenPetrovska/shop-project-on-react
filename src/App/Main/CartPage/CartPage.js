import React from 'react'
import {connect} from 'react-redux'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity
}) => {
    return (
        <>
            <h1 className="page-title">Cart Page</h1>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
        </>
    )
}
const mapState = state => ({
    productsInCart:state.productsInCart
})

export default connect(
    mapState
)(CartPage)