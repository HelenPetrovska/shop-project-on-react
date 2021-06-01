import React from 'react'
import {connect} from 'react-redux'
import Quantity from '../Quantity/Quantity'
import './cartProductListItemExtended.css'


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
    isLiked,
    addLike,
    removeLike,
    
}) => (
       
        <div className="cart-product-list-item-description">
            <div className="row">
                <div className="col-lg-3">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="col-lg-9">
                    <p className="cart-extended-name">
                        <span> {product.name} </span> 
                    </p>
                    <button onClick = {() => (isLiked ? removeLike(product.id) : addLike(product.id))}>
                        {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                    </button>
                    <p className="cart-extended-price">
                         Price for one item: <span className="bold">$ {product.price} </span> 
                    </p>
                    <p className="cart-extended-count">
                         Selected quantity: <span className="bold"> {productCount} </span> 
                         
                    </p>
                    <p className="cart-extended-sum">
                         Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                    </p>
                    <Quantity
                        productCount={productCount}
                        onIncrementClick={() => changeProductQuantity(product.id, productCount+1)}
                        onDecrementClick={() => 
                            productCount === 1 ?
                            removeProductFromCart(product.id) :
                            changeProductQuantity(product.id, productCount-1)
                        }
                        minCount={0}
                    />
                    <button onClick={() => removeProductFromCart(product.id)}>Delete</button>
                </div>
            </div>
        </div>
    
)

const mapState = (state,{product}) => ({
    isLiked:state.productsLikeState[product.id]
})

const mapDispatch = dispatch => ({
    removeProductFromCart:id => dispatch({
        type:"REMOVE_PRODUCT_FROM_CART",
        id,
    }),
    changeProductQuantity:(id,count) => dispatch({
        type:"CHANGE_PRODUCT_QUANTITY",
        id,
        count,
    }),
    addLike:(id) => dispatch({
        type:"LIKE",
        id
    }),
    removeLike:(id) => dispatch({
        type:"DISLIKE",
        id
    }),
})

export default connect(
    mapState,
    mapDispatch
)(CartProductListItemExtended)

