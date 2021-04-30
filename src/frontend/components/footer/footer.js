import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import '../app_assets/app_assets.css'
const Footer = () => {
    return(
        <Container fluid>
            <p id="footer">code and design by <a id="name" href="https://www.linkedin.com/in/duy-l/"><u>duy</u></a>, illustration and typography by <a id="name" href="https://www.gabrielfletcher.com"><u>gabriel</u></a>. 
             inspired by <a id="name" href="https://imissmycafe.com"><u>imissmycafe</u></a> and <a id="name" href="http://imissmybar.com"><u>imissmybar</u></a>.</p>
        </Container>
    )
}
export default Footer;