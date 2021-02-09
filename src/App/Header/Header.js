import React from 'react'


import "./header.css"
import "./menu.css"
import "./cart.css"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <div className="logo text-center">
                        <img src="img/logo.png" alt=""/>
                    </div>
                    
                    <div className="menu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Payment</a></li>
                            <li><a href="/">Shipping</a></li>
                        </ul>
                    </div>
                    
                    <div className="cart text-center">
                        <div className="products-count">0</div>
                        <div className="products-price">$500</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header