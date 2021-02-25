import React from 'react'


import "./header.css"

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'

const Header = ({

    productsInCart
}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">

                    <Logo/>
                    <Menu/>
                    <Cart
                        productsInCart={productsInCart}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header