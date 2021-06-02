import React from 'react'


import "./header.css"

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'

<<<<<<< HEAD
const Header = () => {
=======
const Header = ({
    productsInCart,
    products
}) => {
>>>>>>> server-hooks
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <Logo/>
                    <Menu/>
<<<<<<< HEAD
                    <Cart/>
=======
                    <Cart
                        productsInCart={productsInCart}
                        products = {products}
                    />
>>>>>>> server-hooks
                </div>
            </div>
        </header>
    )
}

export default Header