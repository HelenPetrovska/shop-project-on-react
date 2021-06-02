import React, { Component } from 'react'

class CheckoutPage extends Component {
    state = {

    }

    renderForm = () => {
        return (
            <form>
                <div className="">
                    <input type="text" placeholder="Your name"/>
                </div>
                <div className="">
                    <input type="text" placeholder="Your address"/>
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    render() {
        return (
            <>
                <h1 className="page-title">Checkout Page</h1>
                {this.renderForm()}
            </>
        )
    }
}

export default CheckoutPage