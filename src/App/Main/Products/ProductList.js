import React from 'react'
import ProductListItem from './ProductListItem'
import products from './products'

const ProductList = () => {
    return (
        <>
            <h1 className="page-title">Product List</h1>
            <div className="product-list">
                {
                    products.map(({
                        id,
                        name,
                        description,
                        price,
                        cepacity,
                        type
                    }) => {
                        return (                
                            <ProductListItem
                                key={id}
                                name={name}
                                description={description}
                                type={type}
                                cepacity={cepacity}
                                price={price}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductList
