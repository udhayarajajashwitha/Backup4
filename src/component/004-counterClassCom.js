import React, { Component } from 'react'

class Countercom extends Component{
    constructor(props){
        super(props);
        this.state = {
            text : 0
        }
    }

    increment = () => {
        this.setState({
            text : this.state.text + 1
        })
    }

    decriment = () => {
        this.setState({
            text : this.state.text - 1
        })
    }

    render(){
        return(
            <div>
                { this.state.text === 0 ? '' : <button onClick={this.decriment}>-</button> }
                 {this.state.text} 
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Countercom
