import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
 
const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4    ">
      <div className="footer-content">
        <Row>
          <Col md={5} className="text-left textFooter ">
            <h5> Amazighna</h5>
            <p>Découvrez l'héritage, la culture et la langue amazighe. Explorez les traditions et les richesses culturelles des peuples amazighs.</p>
          </Col>
          <Col className='logoCaliFooter' md={2}>
        <img src="./src/assets/logoBackg.png" alt="Culture Amazighe" className="img-fluid imAcc" />
        </Col>
          <Col md={5} className="text-right">
            
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Amazighna. Tous droits réservés.</p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
