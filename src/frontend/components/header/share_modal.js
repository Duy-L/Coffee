import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import './assets/header.css';
import {
    FacebookShareButton, FacebookIcon,
    EmailShareButton, EmailIcon,
    LineShareButton, LineIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon,
    FacebookMessengerShareButton, FacebookMessengerIcon
} from "react-share";

const shareUrl = 'http://imissmyicedlatte.com/';

function ModalH (props){
    return(
        <Modal
            {...props}
            size="sm"
            aria-labelledby="example-modal-sizes-title-sm"
            centered
        >
            <Modal.Header closedButton>
                <Modal.Body>
                    <p id="modal_title">pls share C: </p>
                        <span id="modal_share">
                            <FacebookShareButton url={shareUrl}>
                                <FacebookIcon size={40} />
                            </FacebookShareButton>
                        </span>
                        <span id="modal_share">
                            <FacebookMessengerShareButton url={shareUrl}>
                                <FacebookMessengerIcon size={40} />
                            </FacebookMessengerShareButton>
                        </span>
                        <span id="modal_share">
                            <TwitterShareButton url={shareUrl}>
                                <TwitterIcon size={40} />
                            </TwitterShareButton>
                        </span>
                        <span id="modal_share">
                            <EmailShareButton url={shareUrl}>
                                <EmailIcon size={40} />
                            </EmailShareButton>
                        </span>
                        <span id="modal_share">
                            <WhatsappShareButton url={shareUrl}>
                                <WhatsappIcon size={40} />
                            </WhatsappShareButton>
                        </span>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    )
}

export default ModalH;


//facebook messenger twitter email whatsap