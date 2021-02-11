import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = () => {
    return (
        <>
            <h1 className="page-title">Product List</h1>
            <ProductListItem
                name="iPhone X"
                description="This is phone"
                type="phone"
                cepacity="1Gb"
                price="1000"
            />
            <ProductListItem
                name="iPhone XS"
                description="This is phone"
                type="phone"
                cepacity="1Gb"
                price="1000"
            />
            <ProductListItem
                name="iPhone 12"
                description="This is phone"
                type="phone"
                cepacity="1Gb"
                price="1000"
            />
            <ProductListItem
                name="iPhone 8 plus"
                description="This is phone"
                type="phone"
                cepacity="1Gb"
                price="1000"
            />
        </>
    )
}

export default ProductList
