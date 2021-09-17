import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            message: "Hello, guest!",
            buttonText: "Log in"
        }
    }

    handleclick = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
        }), ()=> console.log(this.state.message))
        
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleclick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple