import React from 'react'
import "./ProductListItem.css"

const ProductListItem = ({
    name,
    description,
    type,
    cepacity,
    price
}) => {
    return (
        <div className="product-list-item">
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Cepacity: {cepacity} Gb</div>
            <div className="product-price">{price}$</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductListItem
