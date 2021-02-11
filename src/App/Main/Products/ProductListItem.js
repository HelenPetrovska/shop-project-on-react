import React from 'react'
import "./ProductListItem.css"

const ProductListItem = (props) => {
    return (
        <div className="product-list-item">
            <div className="product-title">{props.name}</div>
            <div className="product-description">{props.description}</div>
            <div className="product-features">Type: {props.type}</div>
            <div className="product-features">Cepacity: {props.cepacity} Gb</div>
            <div className="product-price">{props.price}$</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductListItem
