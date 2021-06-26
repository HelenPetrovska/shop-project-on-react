import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import "./ProductListItem.css"
import Quantity from '../../../Components/Quantity/Quantity'
import { connect } from 'react-redux'

class ProductListItem extends Component {

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
            isLiked,
            addLike,
            removeLike,
            productCount=1,
            onIncrementClick,
            onDecrementClick
        } = this.props;

        console.log(productCount)

        return (
            <div className="product-list-item">
                <div className="product-img">
                    <Link to={`/products/${id}`}><img src={image} alt="product-img"/></Link>
                </div>
                <div className="product-like">
                    <button className="like-btn" onClick = {() => isLiked ? removeLike(id) : addLike(id)}>
                        {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                    </button>
                </div>
                <Link to={`/products/${id}`}>
                    <div className="product-title">{name}</div>
                </Link>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Cepacity: {cepacity} Gb</div>
                <Quantity
                    id={id}
                    productCount={productCount}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                    minCount={1}
                />
                <div className="product-price">{price}$</div>
                <button 
                    className="btn-add-to-cart"
                    onClick={()=> addProductToCart(id,productCount)}
                >Add to cart</button>
            </div>
        )
    }
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,    
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

ProductListItem.defaultProps = {
    description:"No description...",
    image:"/images/no-image.jpg"
}

const mapState = (state,{id}) => ({
    isLiked:state.productsLikeState[id],
    productsInCart:state.productsInCart[id],
    productCount:state.productCount[id]
})

const mapDispatch = dispatch => ({
    addLike:(id) => dispatch({
        type:"LIKE",
        id
    }),
    removeLike:(id) => dispatch({
        type:"DISLIKE",
        id
    }),
    addProductToCart:(id,count) => dispatch({
        type:"ADD_PRODUCT_TO_CART",
        id,
        count,
    }),
    onIncrementClick:(id) => dispatch({
        type:"INCREMENT_COUNT",
        id
    }),
    onDecrementClick:(id) => dispatch({
        type:"DECREMENT_COUNT",
        id
    }),

})


export default connect(
    mapState,
    mapDispatch

)(ProductListItem)
