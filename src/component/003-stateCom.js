import { Component } from "react";

class Message extends Component{
    constructor(){
        super();
        this.state = {
            text : "Visiter Message!"
        }
    }

    changeText(){
        this.setState ({
            text : "Thanks for Visiting!"
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={ () => this.changeText()}>subscribe</button>
            </div>
        )
    }
}

export default Message