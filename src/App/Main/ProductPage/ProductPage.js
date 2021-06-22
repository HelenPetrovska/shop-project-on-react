import React from 'react'
import Testimonials from '../../../Components/Testimonials/Testimonials'

import "./productPage.css"
import ProductItem from './ProductItem'

const ProductPage = ({
    match
}) => {

    const id = match.params.id
    return (
        <>
            <ProductItem
                id={id}
            />
            <Testimonials/>
        </>
    )
}

export default ProductPage