import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import '../app_assets/app_assets.css'
const Footer = () => {
    return(
        <Container fluid>
            <p id="footer">code and design by <u>duy</u>, illustrations and typography by <u>gabriel</u>. inspired by <u>imissmycafe</u> and <u>imissmybar</u>.</p>
        </Container>
    )
}

export default Footer;