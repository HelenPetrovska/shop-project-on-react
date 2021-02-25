import React, { Component } from 'react'
import "./ProductListItem.css"
import PropTypes from 'prop-types'

class ProductListItem extends Component {
    state = {
        productCount:1,
    }

    onIncrementClick() {
        this.setState((prevState) => ({
            productCount:prevState.productCount + 1,
        }))
    }

    onDecrementClick() {
        this.setState((prevState) => ({
            productCount:prevState.productCount - 1,
        }))
    }

    render() {
        const {
            id,
            image,
            name,
            description,
            type,
            cepacity,
            price,
            addProductToCart
        } = this.props;

        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt="product-img"/>
                </div>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Cepacity: {cepacity} Gb</div>
                <div className="product-quantity">
                    <button
                    disabled={this.state.productCount <= 1 }
                        onClick={() => this.onDecrementClick()}
                    >-</button>
                    <input type="text" value={this.state.productCount} readOnly/>
                    <button 
                        disabled={this.state.productCount >= 5 }

                        onClick={() => this.onIncrementClick()}
                    >+</button>
                </div>
                <div className="product-price">{price}$</div>
                <button 
                    className="btn-add-to-cart"
                    onClick={()=> addProductToCart(id,this.state.productCount)}
                >Add to cart</button>
            </div>
        )
    }
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
