import React, { useState } from 'react'

const Button = () => {

    const [count,setCount] = useState(0)

    const changeCount = () => {
        setCount(count+1)
    }

    return (
        <button onClick={() => changeCount()}><span>change count ({count})</span></button>
    )
}

export default Button