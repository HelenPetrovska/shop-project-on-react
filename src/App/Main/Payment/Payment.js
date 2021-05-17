import React from 'react'
import Button from './Button'

const Payment = () => {
    return (
        <>
            <h1 className="page-title">Payment Page</h1>
            <div className="btns" style={{margin:100}}>
                <Button/>
                <Button/>
                <Button/>
            </div>
        </>
    )
}

export default Payment