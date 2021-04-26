import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './assets/header.css';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from './modal_about.js';

class Header extends React.Component{
    constructor(props){
        super();
        this.state = {
            show: false
        };
        this.show = this.show.bind(this)
    }
    show = e => {
        this.setState({show: !this.state.show});
    };

    render(){
        return(
            <div class="nav-container">
                <Nav  className="justify-content-end">
                    <Nav.Item>
                        <button onClick={e => {this.show(e);}} class="About">ABOUT</button>
                        <Modal onClose={this.show} show={this.state.show}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                        deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
                        fuga omnis a sed impedit explicabo accusantium nihil doloremque
                        consequuntur.
                         </Modal>
                    </Nav.Item>
                    <Nav.Item>
                        <button class="Share">SHARE</button>
                    </Nav.Item>  
                </Nav>
                <br/>
                <br/>
             
            </div>
        );
    }
}

export default Header;