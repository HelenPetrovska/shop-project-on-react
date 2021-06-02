import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemsList from './ItemsList'
import './ship.css'

const Shipping = () => {

    const [currency,setCurrency] = useState("EUR")
    const [coefficient,setCoefficient] = useState(1)
    const [coefficientData, setCoefficientData] = useState([])
    const [total,setTotal] = useState(0)

    const changeCurrency = (value) => {
            setCurrency(value)
    }

        useEffect(() => {
        axios.get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
        .then(res => res.data)
        .then(data => {
            setCoefficientData(data)
        })
    })

    const changeCoefficient = (value) => {
        value === "USD" ? setCoefficient(coefficientData[1].sale/coefficientData[0].sale) :
        value === "UAH" ? setCoefficient(coefficientData[1].sale) :
        value === "RUB" ? setCoefficient(coefficientData[1].sale/coefficientData[2].sale) :
        setCoefficient(1)
    }
    const changeTotal = (price) => {
        setTotal(total+price)
    }

    return (
        <>
            <h1 className="page-title">Shipping Page</h1>
            <h2 className="shop-title">Our shop page</h2>
            <div className="currency-btns">
                <button onClick={() =>(changeCurrency("USD"), changeCoefficient("USD"))}>USD</button>
                <button onClick={() =>(changeCurrency("EUR"), changeCoefficient("EUR"))}>EUR</button>
                <button onClick={() =>(changeCurrency("UAH"), changeCoefficient("UAH"))}>UAH</button>
                <button onClick={() =>(changeCurrency("RUB"), changeCoefficient("RUB"))}>RUB</button>
            </div>
            <ItemsList
                currency={currency}
                coefficient={coefficient}
                changeTotal={changeTotal}
            />
            <div className="total">total : {Math.floor(total*coefficient*100)/100}</div>
        </>
    )
}

export default Shipping