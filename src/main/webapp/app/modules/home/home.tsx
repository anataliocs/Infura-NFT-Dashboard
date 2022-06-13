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
        <a href="https://prod.consensys-lootbox.mondorobot.com/">
          <img src="content/images/lootbox.png" alt="Logo"/>
        </a>
      </Col>
      <Col md="9">
        <Link to="/nftmetadata"><h3>NFT Metadata by Collection Address</h3></Link>
        <br/>
        <Link to="/nftbyaddress"><h3>NFT Owned by Account Address</h3></Link>
        <br/>
      </Col>
    </Row>
  );
};

export default Home;
