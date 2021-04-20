import React, { useState } from 'react'

const Testimonials = () => {

    const [count, setCount] = useState(1)

    const [color, setColor] = useState("green")

    const toggleColor = () => {
        setColor((value) => (
            value === "green" ? "red" : "green"
        ))
    }

    return (
        <>
            <h1 className="page-title">Testimonials</h1>

            <div>
                color:{color}
            </div>
            <button onClick={() => toggleColor()}>Change color</button>
            <button onClick={() => setCount(count-1)}>-</button>
            <input type="text" value={count}/>
            <button onClick={() => setCount(count+1)}>+</button>
        </>
    )
}

export default Testimonials