import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductListItem from './ProductListItem'

const ProductList = ({
    addProductToCart,
}) => {

    const [products,setProducts] = useState([])

    useEffect(() => {
        axios.get("https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6")
        .then(res => res.data)
        .then(data => {
            setProducts(data.products)
        })
    })

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
                        capacity,
                        type,
                        image,
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
                                addProductToCart={addProductToCart}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductList
