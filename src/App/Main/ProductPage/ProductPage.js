import React from 'react'
import products, { getProductsObject } from '../Products/products'

const ProductPage = ({
    match,
    productsObject = getProductsObject(products) 
}) => {

    const id = match.params.id
    return (
        <>
            <div className="page-title">{productsObject[id].name}</div>
            <div
                dangerouslySetInnerHTML={{
                    __html:productsObject[id].fullDescription
                }}
            ></div>
        </>
    )
}

export default ProductPage
