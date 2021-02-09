import React from "react"
import ReactDOM from "react-dom"

import "./reset.css"
import "./base.css"
import "./header.css"
import "./menu.css"
import "./cart.css"


const App = () => {
    return (
        <>
            <header class="header">
		        <div class="container">
                    <div class="header-row">
                        <div class="logo text-center">
                            <img src="img/logo.png" alt=""/>
                        </div>
                        
                        <div class="menu">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Products</a></li>
                                <li><a href="">Payment</a></li>
                                <li><a href="">Shipping</a></li>
                            </ul>
                        </div>
                        
                        <div class="cart text-center">
                            <div class="products-count">0</div>
                            <div class="products-price">$500</div>
                        </div>
                    </div>
		        </div>
	        </header>
            <main class="main">
                <div class="container">
                    <div class="row">
                        <div class="aside">
                            Filter
                        </div>
                        <div class="main-content">
                            Product List
                        </div>
                    </div>
                </div>
            </main>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        Footer
                    </div>
                </div>
            </footer>
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))