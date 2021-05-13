import React, { useState } from 'react'
import axios from 'axios'

const CheckoutPage = () => {

    const [name,setName] = useState("")
    const [address,setAddress] = useState("")
    const [isOrderSave, setIsOrderSave] = useState(false)

    const orderName = (e) => {
        setName((value) => (
            value = e.target.value
        ))
    }

    const orderAddress = (e) => {
        setAddress((value) => (
            value = e.target.value
        ))
    }

    const sendForm = (e) => {
        e.preventDefault();
        axios.post("https://my-json-server.typicode.com/kznkv-skillup/server/orders", {
            name,
            address,
        })
        .then(res => res.data)
        .then(({name,address}) => {
            setName(name);
            setAddress(address);
            setIsOrderSave(true);
        })
    }

    const renderForm = () => {
        return (
            <form onSubmit={sendForm}>
                <div>
                    <input 
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={orderName}
                    />
                </div>
                <div>
                    <input 
                    type="text"
                    placeholder="Your address"
                    value={address}
                    onChange={orderAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }
    
    const renderMessage = () => {
        return (
            <div>
                Dear {name}, thanks for your order! <br/>
                Address: {address}
            </div>
        )
    }


    return (
        <>
            <h1 className="page-title">Checkout Page</h1>
            {isOrderSave !== true ? renderForm() : renderMessage()}
        </>
    )
}

export default CheckoutPage