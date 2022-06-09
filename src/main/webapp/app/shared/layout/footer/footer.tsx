import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content">
    <Row>
      <Col md="4">
        <p></p>
      </Col>
      <Col md="4">
        <p>Built by <a href="https://infura.io">Infura</a></p>
        <p><a href="https://dev.consensys-lootbox.mondorobot.com/">Claim your Lootbox</a></p>
      </Col>
      <Col md="4">
        <p></p>
      </Col>
    </Row>
  </div>
);

export default Footer;
