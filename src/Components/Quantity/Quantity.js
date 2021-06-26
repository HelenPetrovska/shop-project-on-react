import React from 'react'

const Quantity = ({
    id,
    productCount,
    onDecrementClick,
    onIncrementClick,
    minCount = 1,
}) => {
    return (
        <div className="product-quantity">
            <button
            disabled={productCount <= minCount}
                onClick={() => onDecrementClick(id)}
            >-</button>
            <input type="text" value={productCount} readOnly/>
            <button 
                disabled={productCount >= 5 }

                onClick={() => onIncrementClick(id)}
            >+</button>
        </div>
    )
}

export default Quantity