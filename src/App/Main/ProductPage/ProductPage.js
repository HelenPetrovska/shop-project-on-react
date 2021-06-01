import React from 'react'
import products, { getProductsObject } from '../Products/products'

import Testimonials from '../../../Components/Testimonials/Testimonials'




const ProductPage = ({
    match,
    productsObject = getProductsObject(products) 
}) => {

    const id = match.params.id
    return (
        <>
            <div className="page-title">{productsObject[id].name}</div>
            <div className="product-list-item">
                <div className="product-img">
                    <img src={productsObject[id].image} alt="product-img"/>
                </div>

                {/* <button onClick = {() => isLiked ? removeLike(id) : addLike(id)}>
                    {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                </button> */}
                
                <div className="product-title">{productsObject[id].name}</div>
                
                <div className="product-description">{productsObject[id].description}</div>

                <div className="product-features">Type: {productsObject[id].type}</div>
                <div className="product-features">Cepacity: {productsObject[id].cepacity} Gb</div>
                {/* <Quantity
                    productCount={this.state.productCount}
                    onDecrementClick={this.onDecrementClick}
                    onIncrementClick={this.onIncrementClick}
                    minCount={1}
                /> */}
                <div className="product-price">{productsObject[id].price}$</div>
                {/* <button 
                    className="btn-add-to-cart"
                    onClick={()=> addProductToCart(id,this.state.productCount)}
                >Add to cart</button> */}
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

export default ProductPage
