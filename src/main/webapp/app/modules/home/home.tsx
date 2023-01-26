import './home.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import {Row, Col, Alert} from 'reactstrap';

import {useAppSelector} from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="12" className="pad">
        This reference application demonstrates the usage of the Infura NFT API.  Use the navbar to interact with the NFT API using REST API endpoints or the Typescript SDK.
      </Col>
    </Row>
  );
};

export default Home;
