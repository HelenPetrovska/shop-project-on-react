import React from 'react'
import products, { getProductsObject } from '../Products/products'
import { connect } from 'react-redux'

import Testimonials from '../../../Components/Testimonials/Testimonials'

import "./productPage.css"
import Quantity from '../../../Components/Quantity/Quantity'


const ProductItem = ({
    id,
    productsObject = getProductsObject(products),
    addLike,
    removeLike,
    isLiked,
    productsInCart,
    addProductToCart,
    productCount=1,
    onDecrementClick,
    onIncrementClick
}) => {
    return (
        <>
            <div className="page-title">{productsObject[id].name}</div>
            <div className="product-list-item">
                <div className="product-img">
                    <img src={productsObject[id].image} alt="product-img"/>
                </div>
                <div className="product-like">
                    <button 
                        className="like-btn"
                        onClick = {() => (isLiked ? removeLike(productsObject[id].id) : addLike(productsObject[id].id))}>
                        {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                    </button>
                </div>
                <div className="product-title">{productsObject[id].name}</div>
                
                <div className="product-description">{productsObject[id].description}</div>

                <div className="product-features">Type: {productsObject[id].type}</div>
                <div className="product-features">Cepacity: {productsObject[id].cepacity} Gb</div>
                <Quantity
                    id={productsObject[id].id}
                    productCount={productCount}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                    minCount={1}
                />
                <div className="product-price">{productsObject[id].price}$</div>
                <button 
                    className="btn-add-to-cart"
                    onClick={()=> addProductToCart(productsObject[id].id,productCount)}
                >Add to cart</button>
            </div>

            {/* <div
                dangerouslySetInnerHTML={{
                    __html:productsObject[id].fullDescription
                }}
            ></div> */}
            <Testimonials/>
        </>
    )
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

)(ProductItem)
