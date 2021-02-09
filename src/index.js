import React from "react"
import ReactDOM from "react-dom"

import "./reset.css"
import "./base.css"
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

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="aside">
                        Filter
                    </div>
                    <div className="main-content">
                        Product List
                    </div>
                </div>
            </div>
        </main>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    Footer
                </div>
            </div>
        </footer>
    )
}

const App = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))