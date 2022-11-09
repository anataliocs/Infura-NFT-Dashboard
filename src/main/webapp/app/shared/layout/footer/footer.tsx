import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content">
    <hr/><br/>
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
        <p>Powered by the Infura NFT API</p>
        <br/>
      </Col>
      <Col md="4">
        <p></p>
      </Col>
    </Row>
  </div>
);

export default Footer;
