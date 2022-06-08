import React, {useEffect} from 'react';
import {Button, Col, Row, Form, ButtonGroup, ListGroup, ListGroupItem} from 'reactstrap';
import {ValidatedField} from 'react-jhipster';
import {useForm} from 'react-hook-form';

import {useAppDispatch, useAppSelector} from 'app/config/store';
import {NftMetadataResponse, getInfura} from "app/modules/infura/infura.reducer";


export const InfuraPage = () => {
  const dispatch = useAppDispatch();
  const nftMetadata: NftMetadataResponse = useAppSelector(state => state.infura.nftMetadata);

  const {
    formState: {errors, touchedFields},
  } = useForm({mode: 'onTouched'});

  const handleBlockByNumberSubmit = (event) => {
    event.preventDefault();
    dispatch(getInfura(event.target[0].value));
  };

  const buttonHandleBlockByNumber = (tokenAddress: string) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(getInfura(tokenAddress));
    };

  return (
    <Row>
      <Col md="9">
        <h2>Infura NFT Dashboard</h2>

        <p className="lead">View the FIRST minted NFT/Metadata in Popular Collections</p>
        <Form onSubmit={handleBlockByNumberSubmit}>

          <ValidatedField
            name="tokenAddress"
            label="Deployed Contract Address"
            placeholder="Token Address i.e. 0xa9cb55d05d3351dcd02dd5dc4614e764ce3e1d6e"
            required
            autoFocus
            data-cy="tokenAddress"
            validate={{required: 'Token address cannot be empty!'}}
            error={errors.tokenAddress}
            isTouched={touchedFields.tokenAddress}
          />

          <Button color="primary" type="submit" data-cy="submit">
            Search
          </Button><br/>

        </Form>

        <br/>
        <p className="lead">Popular NFT Collections!</p>

        <ButtonGroup aria-label="Basic example">

          <Button color="primary" onClick={buttonHandleBlockByNumber("0x0")}>
            <img src="content/images/axie-infinity.png" alt="Logo"/>
            Axie Infinity
          </Button>

          <Button color="secondary" onClick={buttonHandleBlockByNumber("0x30D40")}>
            <img src="content/images/decentraland.png" alt="Logo"/>
            Decentraland
          </Button>

          <Button color="info" onClick={buttonHandleBlockByNumber("0x118C30")}>
            <img src="content/images/cryptopunks.png" alt="Logo"/>
            CryptoPunks
          </Button>

          <Button color="light" onClick={buttonHandleBlockByNumber("0x1D4C00")}>
            <img src="content/images/gods-unchained-icon.png" alt="Logo"/>
            Gods Unchained
          </Button>

          <Button color="warning" onClick={buttonHandleBlockByNumber("0x259518")}>
            <img src="content/images/the-sandbox.png" alt="Logo"/>
            The Sandbox
          </Button>

          <Button color="danger" onClick={buttonHandleBlockByNumber("0x28D138")}>
            <img src="content/images/nba-topshot.png" alt="Logo"/>
            NBA TopShot
          </Button>

          <Button color="danger" onClick={buttonHandleBlockByNumber("0x28D138")}>
            <img src="content/images/bayc.png" alt="Logo"/>
            Bored Ape Yacht Club
          </Button>

          <Button color="danger" onClick={buttonHandleBlockByNumber("0x28D138")}>
            <img src="content/images/remarkablewomen.png" alt="Logo"/>
            Remarkable Women
          </Button>
        </ButtonGroup>

        <br/>
        <hr/>
        <h3>NFT Metadata </h3>
        {nftMetadata ? (
          <Row>
            <Col md="6">

              <ListGroup>
                <ListGroupItem><strong>NFT Contract:</strong> {nftMetadata.contract}</ListGroupItem>
                <ListGroupItem><strong>NFT Token ID:</strong> {nftMetadata.tokenId}</ListGroupItem>
                <ListGroupItem><strong>NFT Name:</strong> {nftMetadata.name}</ListGroupItem>
                <ListGroupItem><strong>NFT Description:</strong> {nftMetadata.description}</ListGroupItem>
              </ListGroup>

            </Col>
            <Col md="6">
              <img alt="NFT Image" className="media-object"
                   src={nftMetadata.image}/>
            </Col>
          </Row>
        ) : <div></div>
        }
      </Col>
    </Row>
  );
};

export default InfuraPage;
