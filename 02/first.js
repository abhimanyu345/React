import React from "react"
import ReactDOM from "react-dom/client"

const element1 = ()=>
<><div>
    <h1>This is Heading1</h1>
    <ul style={{backgroundColor:"pink", fontSize:"40px"}}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
    </ul>
</div></>

const root = ReactDOM.createRoot(document.getElementsByTagName('body')[0])
root.render(element1())
