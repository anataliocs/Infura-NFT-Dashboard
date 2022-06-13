import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content">
    <Row>
      <Col md="9">
        <hr/>
      </Col>
    </Row>
    <Row>
      <Col md="4">
        <p></p>
      </Col>
      <Col md="4">
        <p>Powered by &nbsp;<a href="https://infura.io"> <img src="content/images/logo-infura2.png" alt="Logo"/></a></p>
        <br/>
        <p>Claim your <a href="https://prod.consensys-lootbox.mondorobot.com/">Lootbox</a></p>
      </Col>
      <Col md="4">
        <p></p>
      </Col>
    </Row>
  </div>
);

export default Footer;
