import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import './assets/header.css';
import {motion} from "framer-motion";

function ModalC (props){
    const title = "about";
    const line1 = "idk man";
    const line2 = "just making random shit";
    const line3 = "Q_Q";
    const sentence = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 0.4,
                staggerChildren: 0.055,
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
                    {/* <Modal.Title id="contained-modal-title">
                        <span id="modal_title">About</span>
                    </Modal.Title> */}
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
                            {line2.split("").map((char, index)=>{
                            return(
                                <motion.span key={char + "-" + index} variants={letter}>
                                    {char}
                                </motion.span>
                            )
                            })}
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
                        {/* <p id="modal_body">
                            Image lazy loading is one of the more popular approaches of optimizing websites due to the relatively easy implementation and large performance gain. <br/><br/>With lazy loading we load images asynchronously, meaning that we load images only when they appear in the browser's viewport.<br/><br/>
                            Almost a year ago, native lazy loading for images and iframes was released for Chrome and other major browsers. The point of the feature is to give browsers control when to request an image or iframe resource, which makes dev jobs a bit easier. 
                            <br/><br/>Up to that point, the only option was to use various JavaScript plugins which monitored the viewport changes and loaded resources dynamically. Now browsers can do that natively!
                        </p> */}
                    </Modal.Body>
                </Modal.Header>
            </Modal>
    )
}

export default ModalC;