import React from 'react'
import ProductListItem from './ProductListItem'
import products from './products'

const ProductList = ({
    addProductToCart,
    addLike,
    removeLike,
    likeState
}) => {
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
                                cepacity={cepacity}
                                price={price}
                                addProductToCart={addProductToCart}
                                addLike={addLike}
                                removeLike={removeLike}
                                isLiked={likeState[id]}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductList
