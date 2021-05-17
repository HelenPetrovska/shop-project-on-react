import React from 'react'

const Item = ({
    id,
    name,
    description,
    price,
    currency,
    coefficient,
    changeTotal
}) => {

    

    return (
        <>
            <div className="item">
                <h2 className="item-name">{name}</h2>
                <p className="item-description">{description}</p>
                <div className="item-currency">
                    <span>{currency} {Math.floor(price*coefficient*100)/100}</span> 
                </div>
                <button onClick = {() => changeTotal(price)}>Buy</button>
            </div>
        </>
    )
}

export default Item