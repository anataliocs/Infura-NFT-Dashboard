import React, {useEffect} from 'react';
import {
  Button,
  Col,
  Row,
  Form,
  ButtonGroup,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg
} from 'reactstrap';
import {ValidatedField} from 'react-jhipster';
import {useForm} from 'react-hook-form';

import {useAppDispatch, useAppSelector} from 'app/config/store';
import {OwnedNftsResponse, getNftByAddress, OwnedNftsAsset} from "app/modules/nftbyaddress/nftbyaddress.reducer";


export const NftByAddressPage = () => {
  const dispatch = useAppDispatch();
  const nftbyaddress: OwnedNftsResponse = useAppSelector(state => state.nftbyaddress.nftByAddress);
  const ownedNftAssets: OwnedNftsAsset[] = useAppSelector(state => state.nftbyaddress.nftByAddress.assets);

  const {
    formState: {errors, touchedFields},
  } = useForm({mode: 'onTouched'});

  const handleNftByAddress = (event) => {
    event.preventDefault();
    dispatch(getNftByAddress(event.target[0].value));
  };

  const buttonHandleNftByAddress = (tokenAddress: string) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(getNftByAddress(tokenAddress));
    };

  return (
    <Row>
      <Col md="9">
        <h2>Infura NFT Dashboard</h2>

        <p className="lead">View all owned NFTs by a account address</p>
        <Form onSubmit={handleNftByAddress}>

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
        <p className="lead">Famous NFT Wallets on Ethereum!</p>

        <ButtonGroup aria-label="Basic example">

          <Button color="secondary" onClick={buttonHandleNftByAddress("0xfEb52CBf71B9aDAC957c6f948a6Cf9980ac8c907")}>
            Vitalik
          </Button>

          <Button color="info" onClick={buttonHandleNftByAddress("0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB")}>
            CryptoPunks
          </Button>

          <Button color="warning" onClick={buttonHandleNftByAddress("0xf17131a4C85E8A75Ba52B3F91cE8C32f6f163924")}>
            The Sandbox
          </Button>
        </ButtonGroup>

        <br/>
        <hr/>

        <h3>Owned NFTs</h3>
        {nftbyaddress ? (
          <Row>
            <Col md="6">

              <ListGroup>
                <ListGroupItem><strong>Account Address:</strong> {nftbyaddress.account}</ListGroupItem>
                <ListGroupItem><strong>Network:</strong> {nftbyaddress.network}</ListGroupItem>
                <ListGroupItem><strong>Asset Type:</strong> {nftbyaddress.type}</ListGroupItem>
                <ListGroupItem><strong>Total NFTs:</strong> {nftbyaddress.total}</ListGroupItem>
                <ListGroupItem><strong>Page #</strong> {nftbyaddress.pageNumber}</ListGroupItem>
              </ListGroup>

            </Col>
          </Row>
        ) : <div></div>
        }

        <br/>
        <hr/>

        {ownedNftAssets ? (
          <Row>
            <Col md="9">

              {ownedNftAssets
                .filter(item => item.metadata)
                .filter(item => item.metadata.image)
                .filter(item => !item.metadata.image.match('webp'))
                .map((item) =>


                <Card key={item.tokenId}>
                  <CardImg
                    alt={item.metadata ? item.metadata.description : 'Placeholder'}
                    src={item.metadata.image}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      {item.metadata ? item.metadata.name : 'placeholder'}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {item.metadata ? item.metadata.description : 'placeholder'}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              )}

            </Col>
          </Row>
        ) : <div></div>}

      </Col>
    </Row>
  );
};

export default NftByAddressPage;
