import React, { Component } from 'react'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

    state = {

        productsInCart: {
            1:3,
            2:5,
        }

    }

    // addProductToCart = (count, price,id,countId) => {
    //     this.setState((prevState) => ({
    //         productsInCart: {
    //             id:id,
    //             countId:prevState.productsInCart.countId+countId,
    //         }
    //     }))
    // }
    
    render() {
        return (
            <>
                <Header
                    productsInCart={this.state.productsInCart}    
                />
                <Main 
                    productsInCart = {this.state.productsInCart}
                />
                <Footer/>
            </>
        )
    }
}
export default App