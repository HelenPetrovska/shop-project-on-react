import React from 'react'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import Payment from './Payment/Payment'
import Shipping from './Shipping/Shipping'


import ProductList from './Products/ProductList'
import Testimonials from '../../Components/Testimonials/Testimonials'

const Main = ({
    addProductToCart,
    removeProductFromCart,
    productsInCart,
    changeProductQuantity,
    addLike,
    removeLike,
    likeState
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
                            addLike={addLike}
                            removeLike={removeLike}
                            likeState={likeState}
                            />
                        )}/>
                        <Route path="/cart" render={() => (
                            <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                            />
                        )}/>
                        <Route path="/payment" component={Payment}/>
                        <Route path="/shipping" component={Shipping}/>
                        <Route path="/" exact component={Testimonials}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main