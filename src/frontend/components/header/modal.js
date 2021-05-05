import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import './assets/header.css';
import {motion} from "framer-motion";

function ModalC (props){
    const title = "about";
    const line1 = "This is a project that we've put together in order to cope with WFH during the pandemic.";
    const line2 = "Inspired by IMissMyCafe and IMissMyBar.";
    const line3 = "Thank you for stopping by~";
    const sentence = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 0.4,
                staggerChildren: 0.03,
            },
        },
    }
    const letter = {
        hidden: { opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
        },
    }
    return(
            <Modal
                {...props}
                id="test"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Body>
                        <motion.h3
                            className="load-screen--message"
                            variants={sentence}
                            initial="hidden"
                            animate="visible"
                        >
                        <p id="modal_title">
                            {title.split("").map((char, index)=>{
                                return(
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}    
                        </p>
                        <p id="modal_body">
                            {line1.split("").map((char, index)=>{
                                return(
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                            <br/>
                            <br/>
                            {line2.split("").map((char, index)=>{
                            return(
                                <motion.span key={char + "-" + index} variants={letter}>
                                    {char}
                                </motion.span>
                            )
                            })}
                            <br/>
                            <br/>
                            {line3.split("").map((char, index)=>{
                            return(
                                <motion.span key={char + "-" + index} variants={letter}>
                                    {char}
                                </motion.span>
                            )
                            })}
                        </p>
                        </motion.h3>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
    )
}

export default ModalC;