import React, { Component } from 'react'
import {omit} from 'lodash'
import axios from 'axios'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

    state = {

        productsInCart: {},
        products:[]
    }

    addProductToCart = (id,count) => {
        this.setState((prevState) => ({
            productsInCart: {
                ...prevState.productsInCart,
                [id]: (prevState.productsInCart[id] || 0) + count
            }
        }))
    }
    
    removeProductFromCart = (postId) => {
        this.setState((prevState) => ({
            productsInCart:omit(prevState.productsInCart,[postId])
        }))
    }

    changeProductQuantity = (productId, quantity) => {
        this.setState((prevState) => ({
            productsInCart:{
                ...prevState.productsInCart,
                [productId]:quantity
            }
        }))
    }

    componentDidMount() {
        axios.get("https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6")
        .then(res => res.data)
        .then(data => this.setState(() =>({
            products:data.products
        })))
    }

    render() {
        return (
            <>
                <Header
                    productsInCart={this.state.productsInCart}
                    products = {this.state.products}
                />
                <Main 
                    addProductToCart = {this.addProductToCart}
                    productsInCart={this.state.productsInCart}
                    removeProductFromCart={this.removeProductFromCart}
                    changeProductQuantity={this.changeProductQuantity}
                    products = {this.state.products}
                />
                <Footer/>
            </>
        )
    }
}
export default App