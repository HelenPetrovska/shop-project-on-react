import React from 'react'
import logo from './logo.png'

import { Link } from 'react-router-dom'



const Logo = () => {
    return (
        <div className="logo text-center">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
        </div>
    )
}

export default Logo