import React from "react"

/* export default function Greeting(props()){
    return(
        <div>
            <h1>Hello world!</h1>
        </div>
    )
} */

const Greeting = (props) => {
    // props.firstname = "Udhaya" Props are read only(immutable) can not changes the value
    // const { firstname, lastname } = props //Destructuring
    
    return(
        <div>
            <h1>Hello Function Component! {props.firstname} {props.lastname}</h1>
            {/* <h1>Hello Function Component! {firstname} {lastname}</h1> //Destructuring */}
            {props.children}
        </div>
    )
}
export default Greeting