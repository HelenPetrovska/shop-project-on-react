import React, { Component } from 'react'
import "./ProductListItem.css"
import PropTypes from 'prop-types'
import Quantity from '../../../Components/Quantity/Quantity'
import { connect } from 'react-redux'

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
        } = this.props;

        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt="product-img"/>
                </div>
                <button onClick = {() => isLiked ? removeLike(id) : addLike(id)}>
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

const mapState = (state,{id}) => ({
    isLiked:state.productsLikeState[id]
})

const mapDispatch = dispatch => ({
    addLike:(id) => dispatch({
        type:"LIKE",
        id
    }),
    removeLike:(id) => dispatch({
        type:"DISLIKE",
        id
    })
})


export default connect(
    mapState,
    mapDispatch

)(ProductListItem)
