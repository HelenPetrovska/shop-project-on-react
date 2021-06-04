import React, { useState } from 'react'

import "./testimonials.css"

const Testimonials = () => {

    const arrTestimonials = [
        {name:"Jack", text:"Купил телефон, все ок"},
        {name:"Lyda", text:"Нормально"}
    ]

    const [testimonials,setTestimonials] = useState(arrTestimonials)

    const [newTestimonials, setNewTestimonials] = useState({
        name:"",
        text:""
    })

    const handleNameChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            name:e.target.value
        }))
    }

    const handleTextChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            text:e.target.value
        }))
    }

    const sendForm = (e) => {
        e.preventDefault();
        setTestimonials(value => {
            return [...value, newTestimonials]
        })
        setNewTestimonials({
            name:"",
            text:""
        })
    }


    return (
        <>
            <h1 className="page-title">Testimonials</h1>

            {
              testimonials.map((item,i) => (
                  <div key={i}
                    style={{
                      backgroundColor:"rgba(255,255,255,0.75)",
                      padding:"10px",
                      borderRadius:"10px",
                      marginBottom:"15px"
                  }}>
                        <div style={{marginBottom:"10px"}}>Name: {item.name}</div>
                        <div style={{marginBottom:"10px"}}>Message: {item.text}</div>

                  </div>
              ))  
            }

            <form onSubmit={sendForm} style={{marginTop:"40px"}} className="testimonials-form">
                <div className="testimonials-input">
                    <input 
                        type="text" 
                        placeholder="your name"
                        value={newTestimonials.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="testimonials-input">
                    <textarea 
                        cols="30" 
                        rows="5" 
                        placeholder="your message"
                        value={newTestimonials.text}
                        onChange={handleTextChange}
                    ></textarea>
                </div>
                <div className="testimonials-button">
                    <button className="testimonials-btn">Leave a comment</button>
                </div>
            </form>
        </>
    )
}

export default Testimonials