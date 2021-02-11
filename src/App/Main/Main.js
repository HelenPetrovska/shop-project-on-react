import React from 'react'

import ProductList from './Products/ProductList'

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="row-main">
                    <div className="aside">
                        Filter
                    </div>
                    <div className="main-content">
                        <ProductList/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main