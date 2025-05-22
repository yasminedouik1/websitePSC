import React from 'react';
import { Navbar, Nav, Container, Row, Col, Carousel } from 'react-bootstrap';
import './style.css';

function HomePage() {
  return (
    <div className="m-0 p-0">
     

      <Container className='cont1' >
        <Row>
          <Col md={6}>
            <img src="./src/assets/final.png" alt="Culture Amazighe" className="img-fluid imAcc" />
          </Col>
      
          <Col className='textPage' md={6}>
            <h2>À la découverte de la culture Amazighe</h2>
            <p>
            Les Amazighs, ou Berbères, sont un groupe ethnique d'Afrique du Nord, 
            avec une histoire riche et une culture variée. Leur langue, le tamazight, 
            fait partie des langues afro-asiatiques et se décline en plusieurs variantes
             régionales. L'alphabet traditionnel, le Tifinagh, a été redécouvert et est
              utilisé aujourd'hui dans l'enseignement et les médias dans certains pays comme le Maroc.
            </p>
          </Col>
        </Row>
      </Container>


      <Container className="mx-auto">
  <h2 className='titrePeuple'>Découvrez le peuple amazigh</h2>
  <Row>
    <Col>
      <Carousel interval={3000} pause={false}> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./src/assets/ama6.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Origines anciennes</h3>
            <p>Les Amazighs sont les peuples autochtones de l’Afrique du Nord, avec des racines remontant à plus de 4 000 ans. Ils ont habité la région bien avant l’arrivée des Phéniciens, des Romains et des Arabes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./src/assets/ama.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Langue et alphabet</h3>
            <p>Les Amazighs parlent le tamazight et écrivent avec l’alphabet tifinagh, l’un des plus anciens alphabets encore utilisés aujourd’hui.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./src/assets/ama5.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Identité et symbolisme</h3>
            <p>Le mot "Amazigh" signifie "homme libre". Leur symbole (ⵣ) représente la liberté et la résistance, des valeurs centrales dans leur culture.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./src/assets/ama7.png"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Célébration du Nouvel An</h3>
            <p>Les Amazighs célèbrent Yennayer, leur Nouvel An, chaque 12 janvier, avec des festins, des danses et des chants pour marquer le début de la nouvelle année agricole.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>
  </Row>
</Container>

      <Container className="my-5 pt-5">
        <Row>
        <Col className='textCali' md={2}>
        <img src="./src/assets/cali.png" alt="Culture Amazighe" className="img-fluid imAcc" />
        </Col>
          <Col className='textPage1' md={5}>
            <h2>Où la culture amazighe persiste-t-elle en Tunisie ?</h2>
            <p>
            La culture amazighe persiste principalement dans le sud et l'intérieur de la Tunisie,
             notamment à <b>Djerba, Matmata, Tataouine et Ksar Ouled Soltane. </b>  Ces régions préservent
              les traditions, la langue et l'architecture amazighes, malgré les influences extérieures.
            </p>
          </Col>
          <Col md={5}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212256.52348309645!2d10.893748350000001!3d33.7733729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabc09046e9991%3A0x6830d5301a39ca66!2sDjerba!5e0!3m2!1sfr!2stn!4v1741207884282!5m2!1sfr!2stn"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Djerba Map"
          ></iframe>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default HomePage;
