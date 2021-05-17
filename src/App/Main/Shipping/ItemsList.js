import React from 'react'
import Item from './Item'
import itemsData from './itemsData'

const ItemsList = ({
    currency,
    coefficient,
    changeTotal
}) => {

    return (
        <div className="items-list">
            {
                itemsData.map(({
                    id,
                    name,
                    description,
                    price
                }) => {
                    return (
                        <Item
                            key={id}
                            id={id}
                            name={name}
                            description={description}
                            price={price}
                            currency={currency}
                            coefficient={coefficient}
                            changeTotal={changeTotal}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemsList