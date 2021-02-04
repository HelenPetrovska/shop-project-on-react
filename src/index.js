import React from "react"
import ReactDOM from "react-dom"


// const el = React.createElement(
//   "div",
//   {
//     id: "test"
//   },
//   "Hello world"
// )

const Hi = () => {
    return (
        <h1>Hello world</h1>
    )
}
const el = <div>
    <Hi/>
    <p>lorem</p>
</div>



ReactDOM.render(el,document.getElementById("root"))