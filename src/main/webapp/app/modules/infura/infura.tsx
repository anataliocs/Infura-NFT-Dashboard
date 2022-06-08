import React, {useEffect} from 'react';
import {Button, Col, Row, Form, ButtonGroup, ListGroup, ListGroupItem} from 'reactstrap';
import {ValidatedField} from 'react-jhipster';
import {useForm} from 'react-hook-form';

import {useAppDispatch, useAppSelector} from 'app/config/store';
import {NftMetadataResponse, getInfura} from "app/modules/infura/infura.reducer";


export const InfuraPage = () => {
  const dispatch = useAppDispatch();
  const nftMetadata : NftMetadataResponse = useAppSelector(state => state.infura.nftMetadata);

  const {
    formState: {errors, touchedFields},
  } = useForm({mode: 'onTouched'});

  const handleBlockByNumberSubmit = (event) => {
    event.preventDefault();
    dispatch(getInfura(event.target[0].value));
  };

  const buttonHandleBlockByNumber = (blockNumber: string) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(getInfura(blockNumber));
    };

  return (
    <Row>
      <Col md="9">
        <h2>Infura NFT Dashboard</h2>

        <p className="lead">Analyze NFTs and NFT Metadata</p>
        <Form onSubmit={handleBlockByNumberSubmit}>

          <ValidatedField
            name="blockNumber"
            label="Block Number(Hexadecimal)"
            placeholder="Block Number in Hexadecimal i.e. 0x5BAD55"
            required
            autoFocus
            data-cy="blockNumber"
            validate={{required: 'Block Number cannot be empty!'}}
            error={errors.blockNumber}
            isTouched={touchedFields.blockNumber}
          />

          <Button color="primary" type="submit" data-cy="submit">
            Search
          </Button><br/>

        </Form>

        <br/>
        <p className="lead">Popular NFT Collections!</p>

        <ButtonGroup aria-label="Basic example">

          <Button color="primary" onClick={buttonHandleBlockByNumber("0x0")}>
            Genesis(0)
          </Button>

          <Button color="secondary" onClick={buttonHandleBlockByNumber("0x30D40")}>
            Frontier Thawing(200000)
          </Button>

          <Button color="info" onClick={buttonHandleBlockByNumber("0x118C30")}>
            Homestead(1150000)
          </Button>

          <Button color="light" onClick={buttonHandleBlockByNumber("0x1D4C00")}>
            DAO Fork(1920000)
          </Button>

          <Button color="warning" onClick={buttonHandleBlockByNumber("0x259518")}>
            Tangerine Whistle(2463000)
          </Button>

          <Button color="danger" onClick={buttonHandleBlockByNumber("0x28D138")}>
            Spurious Dragon(2675000)
          </Button>

        </ButtonGroup>

        <br/>
        <hr/>
        <h3>NFT Metadata </h3>

        {nftMetadata ? (

          <ListGroup>
            <ListGroupItem>NFT Contract: {nftMetadata.contract}</ListGroupItem>
            <ListGroupItem>NFT Token ID: {nftMetadata.tokenId}</ListGroupItem>
            <ListGroupItem>NFT Name: {nftMetadata.name}</ListGroupItem>
            <ListGroupItem>NFT Description: {nftMetadata.description}</ListGroupItem>
            <ListGroupItem>

              <img alt="NFT Image" className="media-object"
                   src="https://ipfs.io/ipfs/Qmdibwx2MmendzExWgsGsyiGodMJ8hvAkLHcAVbMbpK2rG/7421.png"/>

            </ListGroupItem>
          </ListGroup>
        ) : <div></div>
        }
      </Col>
    </Row>
  );
};

export default InfuraPage;
