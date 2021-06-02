import React from 'react'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import Payment from './Payment/Payment'
import Shipping from './Shipping/Shipping'


import ProductList from './Products/ProductList'
import ProductPage from './ProductPage/ProductPage'
import CheckoutPage from './CheckoutPage/CheckoutPage'

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="row-main">
                    <div className="main-content">
                        <Route path="/" exact render={() =>(
                            <ProductList/>
                        )}/>
                        <Route path="/cart" component={CartPage}/>
                        <Route path="/payment" component={Payment}/>
                        <Route path="/shipping" component={Shipping}/>
                        <Route path="/products/:id" component={ProductPage}/>
                        <Route path="/checkout" component={CheckoutPage}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main