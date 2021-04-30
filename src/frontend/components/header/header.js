import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import ModalC from './modal.js';
import ModalH from './share_modal.js';
import {motion} from "framer-motion";
class Header extends React.Component{
    constructor(props){
        super();
        this.state = {
            modalShow: false,
            setModalShow: false,
            shareShow: false,
            setShareShow: false,
        };
        this.show_about = this.show_about.bind(this);
        this.close_about = this.close_about.bind(this);
        this.show_share = this.show_share.bind(this);
        this.close_share = this.close_share.bind(this);
    }
    show_share = () => {
        this.setState({setShareShow: true});
    }
    show_about = () => {
        this.setState({setModalShow: true});
    };
    close_share = () =>{
        this.setState({setShareShow: false});
    }
    close_about = () => {
        this.setState({setModalShow: false});
    };
    render(){
        return(
            <div class="nav-container">
                <Nav  className="justify-content-end">
                    <Nav.Item>
                        <motion.div
                            onClick={() => {this.show_about()}}
                            animate={{rotate: this.state.setModalShow ? 360 : 0,}}
                            class="About">ABOUT
                        </motion.div>
                        {/* <button onClick={() => {this.show_about()}} class="About">ABOUT</button> */}
                        <ModalC
                            show={this.state.setModalShow}
                            onHide={()=> this.close_about()}
                        />     
                    </Nav.Item>
          
                    <Nav.Item>
                        <motion.div
                                onClick={() => {this.show_share()}}
                                animate={{rotate: this.state.setShareShow ? 360 : 0,}}
                                class="Share">SHARE
                        </motion.div>
                        {/* <button onClick={()=> {this.show_share()}} class="Share">SHARE</button> */}
                        <ModalH
                            show={this.state.setShareShow}
                            onHide={()=> this.close_share()}
                        />
                    </Nav.Item>  
                </Nav>
                <br/>
                <br/>
            </div>
        );
    }
}
export default Header;