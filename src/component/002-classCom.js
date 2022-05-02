import React, { Component } from "react"

class Greet extends Component{
    render(){
        // const { firstname, lastname } = this.props //Destructuring
        // const { state1, state2, state3 } = this.state //Destructuring
        return(
            <div>
                <h1>Hellow Class Component {this.props.firstname} {this.props.lastname}</h1>
                {/* <h1>Hellow Class Component {firstname} {lastname}</h1> //Destructuring */}
                {this.props.children}
            </div>
        )
    }
}

export default Greet