import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './assets/header.css';
import 'bootstrap/dist/css/bootstrap.css';

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
            <div class="nav-container">
                <Nav  className="justify-content-end">
                    <Nav.Item>
                        <button onClick={this.testing} class="About">ABOUT</button>
                    </Nav.Item>
                    <Nav.Item>
                        <button onClick={this.testing} class="Share">SHARE</button>
                    </Nav.Item>  
                </Nav>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Header;