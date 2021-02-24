import React from 'react'

import ProductList from './Products/ProductList'

const Main = ({
    productsInCart
}) => {
    console.log(productsInCart)
    return (
        <main className="main">
            <div className="container">
                <div className="row-main">
                    <div className="aside">
                        Filter
                    </div>
                    <div className="main-content">
                        <ProductList
                            productsInCart={productsInCart}         
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main