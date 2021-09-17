import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild";


class NavBarForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true,
        }
    }
    handleButtonClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false: true
        }),  () => console.log(this.state.isLoggedIn))
    }

    render() {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>

                    {/* This is part of steps 1-8 */}
                    {/* {
                    this.state.isLoggedIn ? 
                        <button onClick={() => this.handleButtonClick()}>Login</button>
                        : 
                        <form>
                            <label htmlFor = "username">Username:</label>
                            <input placeholder="username" id="username"/>
                            
                            <label htmlFor = "password">Password:</label>
                            <input placeholder="password" id="password"/>
                            <button onClick={() => this.handleButtonClick()}>Submit</button>
                        </form>
                        
                    } */}
                
                {/* This is how things should look after completing the extra task */}

                <NavBarChild
                isLoggedIn={this.state.isLoggedIn}
                handleClick={this.handleButtonClick}
                />

            </div>
        )
    }
}

export default NavBarForm