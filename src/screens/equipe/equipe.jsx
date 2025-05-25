import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

function EquipePage() {
  return (
    <div className="m-0 p-0">
      <Container className='cont1'>
        <Row>
          <Col md={12} className='textPage'>
            <h2>Notre Équipe</h2>
            <p>
              Nous sommes un groupe d’étudiants de l’École Polytechnique de Sousse, réunis par une même vision : faire revivre et valoriser la culture amazighe à travers des outils modernes, accessibles et porteurs de sens.
              Ce projet s’inscrit dans le cadre de notre Projet Socio-Culturel (PSC), une initiative qui allie engagement étudiant, impact social et transmission culturelle.
            </p>
          </Col>
        </Row>

        <Row className='my-5 justify-content-center'>
          <Col md={4} className='text-center mb-4'>
            <img
              src="./src/assets/ghada.jpeg"
              alt="Ghada"
              className="img-fluid rounded-circle"
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            />
            <h5 className='mt-3'>Ghada Ben Mansour</h5>
          </Col>

          <Col md={4} className='text-center mb-4'>
            <img
              src="./src/assets/yasmine.png"
              alt="Yasmine"
              className="img-fluid rounded-circle"
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            />
            <h5 className='mt-3'>Yasmine Douik</h5>
          </Col>

          <Col md={4} className='text-center mb-4'>
            <img
              src="./src/assets/farah.jpg"
              alt="Farah"
              className="img-fluid rounded-circle"
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            />
            <h5 className='mt-3'>Farah Fassi</h5>
          </Col>

          <Col md={4} className='text-center mb-4'>
            <img
              src="./src/assets/chaima.jpg"
              alt="Chaima"
              className="img-fluid rounded-circle"
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            />
            <h5 className='mt-3'>Chaima Chatti</h5>
          </Col>

          <Col md={4} className='text-center mb-4'>
            <img
              src="./src/assets/fawz.jpeg"
              alt="Fawziya"
              className="img-fluid rounded-circle"
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            />
            <h5 className='mt-3'>Fawz El Houda Ghalba</h5>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={12} className="text-center">
            <h4 className="mb-3">À propos du projet</h4>
            <p className="lead">
              Tamazirna est une initiative culturelle et éducative, réalisée dans le cadre des activités
              de l’<strong>École Polytechnique de Sousse</strong>, qui vise à faire revivre le patrimoine amazigh en Tunisie.
              À travers un site web, un documentaire, une brochure et une présence en ligne,
              nous cherchons à reconnecter les jeunes à leur langue, leur histoire et leur identité amazighe.
            </p>
          </Col>
        </Row>
        <Row className="my-5">


          <Col md={4} className="text-center mb-4">
            <img
              src="./src/assets/poly.jpg"
              alt="Logo École Polytechnique de Sousse"
              className="img-fluid"
              style={{ maxHeight: '150px' }}
            />
            <p className="mt-2">École Polytechnique de Sousse</p>
          </Col>

          <Col md={4} className="text-center mb-4">
            <img
              src="./src/assets/projet1.jpg"
              alt="Travail en groupe"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
            <p className="mt-2">Travail collaboratif</p>
          </Col>

          <Col md={4} className="text-center mb-4">
            <img
              src="./src/assets/projet2.jpg"
              alt="Présentation du projet"
              className="img-fluid rounded"
              style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
            <p className="mt-2">Présentation du projet</p>
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default EquipePage;
