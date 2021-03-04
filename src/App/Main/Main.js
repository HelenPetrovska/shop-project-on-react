import React from 'react'
import { Route } from 'react-router'
import CartPage from './CartPage/CartPage'
import Payment from './Payment/Payment'
import Shipping from './Shipping/Shipping'


import ProductList from './Products/ProductList'

const Main = ({
    addProductToCart,
    productsInCart
}) => {
    return (
        <main className="main">
            <div className="container">
                <div className="row-main">
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
                            productsInCart={productsInCart}
                            />
                        )}/>
                        <Route path="/payment" component={Payment}/>
                        <Route path="/shipping" component={Shipping}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main