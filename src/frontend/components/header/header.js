import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './assets/header.css';
class Header extends React.Component{
    constructor(props){
        super();

        this.testing = this.testing.bind(this);
    }

    testing(){
        console.log("hi");
    }
    render(){
        return(
            <div className="nav-container">
                <Nav  >
                    <Nav.Item>
                        <button onClick={this.testing} class="About">ABOUT</button>
                    </Nav.Item>
                    <Nav.Item>
                        <button onClick={this.testing} class="Share">SHARE</button>
                    </Nav.Item>
                       
                </Nav>
            </div>
        );
    }
}

export default Header;