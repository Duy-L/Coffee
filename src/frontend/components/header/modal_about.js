import React, { Component } from 'react';
import PropTypes from "prop-types";
import './assets/header.css';

class Modal extends React.Component{
    constructor(props){
        super();
    }
    onClose = e =>{
        console.log(this.props)
        this.props.onClose && this.props.onClose(e);
    };
    render(){
        if (!this.props.show){
            return null;
        }
        return(
            <div class="modal" id="modal">
                <h2>Modal Window</h2>
                <div class="content">{this.props.children}</div>
                <div class="actions">
                    <button class="toggle-button" onClick={this.onClose}>
                        close
                    </button>
                </div>
            </div>
        );
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
  

export default Modal;