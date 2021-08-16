import React from 'react'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import Payment from './Payment/Payment'
import Shipping from './Shipping/Shipping'


import ProductList from './Products/ProductList'
import Testimonials from '../../Components/Testimonials/Testimonials'
import CheckoutPage from './CheckoutPage/CheckoutPage'

const Main = ({
    products,
    addProductToCart,
    removeProductFromCart,
    productsInCart,
    changeProductQuantity,
}) => {
    return (
        <main className="main">
            <div className="container">
                <div className="row-main">zz
                    <div className="aside">
                        Filter
                    </div>
                    <div className="main-content">
                        <Route path="/" exact render={()=> (
                            <ProductList
                            addProductToCart={addProductToCart}
                            />
                        )}/>
                        <Route path="/cart" render={() => (
                            <CartPage
                            products={products}
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                            />
                        )}/>
                        <Route path="/payment" component={Payment}/>
                        <Route path="/shipping" component={Shipping}/>
                        <Route path="/" exact component={Testimonials}/>
                        <Route path="/checkout" component={CheckoutPage}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main