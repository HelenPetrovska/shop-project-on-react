import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductListItem from './ProductListItem'

const ProductList = () => {
    return (
        <>
            <h1 className="page-title">Product List</h1>
            <div className="product-list">
                {
                    products.map(({
                        id,
                        name,
                        image,
                        description,
                        price,
                        cepacity,
                        type
                    }) => {
                        return (
                            <ProductListItem
                                key={id}
                                id={id}
                                image={image}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
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
