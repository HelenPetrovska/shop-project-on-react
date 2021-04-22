import React, { Component } from 'react'
import "./ProductListItem.css"
import PropTypes from 'prop-types'
import Quantity from '../../../Components/Quantity/Quantity'

class ProductListItem extends Component {
    state = {
        productCount:1,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount + 1,
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount - 1,
        }))
    }

    changeLikeState = () => {
        const {
            id,
            addLike,
            removeLike,
            isLiked
        } = this.props;

        if(isLiked) {
            removeLike(id)
        } else {
            addLike(id)
        }
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
            addProductToCart,
            isLiked
} = this.props;

        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt="product-img"/>
                </div>
                <button onClick={() => this.changeLikeState(id)}>
                    {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                </button>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Cepacity: {cepacity} Gb</div>
                <Quantity
                    productCount={this.state.productCount}
                    onDecrementClick={this.onDecrementClick}
                    onIncrementClick={this.onIncrementClick}
                    minCount={1}
                />
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
