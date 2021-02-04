import React from "react"
import ReactDOM from "react-dom"


// const el = React.createElement(
//   "div",
//   {
//     id: "test"
//   },
//   "Hello world"
// )

const Header = () => {
    return (
        <h1>Hello world</h1>
    )
}

const List = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}

const P = () => {
    return (
        <>
            <p>lorem1</p>
            <p>lorem2</p>
            <p>lorem3</p>
        </>
    )
}

const App = () => {
    return (
        <>
            <List/>
            <P/>
            <Header/>
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))