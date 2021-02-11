import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = () => {
    return (
        <>
            <h1 className="page-title">Product List</h1>
            <div className="product-list">
                <ProductListItem
                    name="iPhone X"
                    description="This is phone"
                    type="phone"
                    cepacity="1"
                    price="1000"
                />
                <ProductListItem
                    name="iPhone XS"
                    description="This is phone"
                    type="phone"
                    cepacity="2"
                    price="2000"
                />
                <ProductListItem
                    name="iPhone 12"
                    description="This is phone"
                    type="phone"
                    cepacity="1"
                    price="1000"
                />
                <ProductListItem
                    name="iPhone 8 plus"
                    description="This is phone"
                    type="phone"
                    cepacity="2"
                    price="2000"
                />
            </div>
        </>
    )
}

export default ProductList
