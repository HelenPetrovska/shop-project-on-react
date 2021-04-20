import React, { useState } from 'react'

const Testimonials = () => {

    const [count, setCount] = useState(1)

    return (
        <>
            <h1 className="page-title">Testimonials</h1>
            <button onClick={() => setCount(count-1)}>-</button>
            <input type="text" value={count}/>
            <button onClick={() => setCount(count+1)}>+</button>
        </>
    )
}

export default Testimonials