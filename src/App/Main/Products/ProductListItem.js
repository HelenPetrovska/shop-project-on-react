import React from 'react'
import "./ProductListItem.css"
import PropTypes from 'prop-types'

const ProductListItem = ({
    image,
    name,
    description,
    type,
    cepacity,
    price
}) => {
    return (
        <div className="product-list-item">
            <div className="product-img">
                <img src={image} alt="product-img"/>
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Cepacity: {cepacity} Gb</div>
            <div className="product-price">{price}$</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    cepacity:PropTypes.number.isRequired,    
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

ProductListItem.defaultProps = {
    description:"No description...",
    image:"/images/no-image.png"
}

export default ProductListItem
