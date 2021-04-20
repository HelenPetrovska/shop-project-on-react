import React, { useState } from 'react'

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
              testimonials.map((item) => (
                  <div style={{
                      backgroundColor:"rgba(255,255,255,0.75)",
                      padding:"10px"
                  }}>
                        <div style={{marginBottom:"10px"}}>Name: {item.name}</div>
                        <div style={{marginBottom:"10px"}}>Message: {item.text}</div>

                  </div>
              ))  
            }

            <form onSubmit={sendForm} style={{marginTop:"40px"}}>
                <div>
                    <input 
                        type="text" 
                        placeholder="your name"
                        value={newTestimonials.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <textarea 
                        cols="30" 
                        rows="10" 
                        placeholder="your message"
                        value={newTestimonials.text}
                        onChange={handleTextChange}
                    ></textarea>
                </div>
                <button>leave a comment</button>
            </form>
        </>
    )
}

export default Testimonials