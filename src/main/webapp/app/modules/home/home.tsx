import './home.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import {Row, Col, Alert} from 'reactstrap';

import {useAppSelector} from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad">
        <a href="https://dev.consensys-lootbox.mondorobot.com/">
          <img src="content/images/lootbox.png" alt="Logo"/>
        </a>
      </Col>
      <Col md="9">
        <Link to="/infura"><h2>Infura NFT Metadata</h2></Link>
        <br/>
      </Col>
    </Row>
  );
};

export default Home;
