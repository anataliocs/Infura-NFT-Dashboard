import React, {useEffect} from 'react';
import {Button, Col, Row, Form, ButtonGroup, ListGroup, ListGroupItem, Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {ValidatedField} from 'react-jhipster';
import {useForm} from 'react-hook-form';

import {useAppDispatch, useAppSelector} from 'app/config/store';
import {
  NftMetadataResponse,
  getNftMetaData,
  NftsCreatedByCollectionResponse
} from "app/modules/nftmetadata/nftmetadata.reducer";
import NftCarousel from "app/shared/layout/carousel/nftCarousel";


export const NftMetadataPage = () => {
  const dispatch = useAppDispatch();
  const nftResponse: NftsCreatedByCollectionResponse = useAppSelector(state => state.nftmetadata.nftMetadata);
  const nftMetadata: NftMetadataResponse[] = useAppSelector(state => state.nftmetadata.nftMetadata.assets);

  const {
    formState: {errors, touchedFields},
  } = useForm({mode: 'onTouched'});

  const handleNftByAddress = (event) => {
    event.preventDefault();
    dispatch(getNftMetaData(event.target[0].value));
  };

  const buttonHandleNftByAddress = (tokenAddress: string) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(getNftMetaData(tokenAddress));
    };

  return (
    <Row>
      <Col md="9">
        <h2>Infura NFT Dashboard</h2>

        <p className="lead">View the FIRST minted NFT/Metadata in Popular Collections</p>
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

        {nftMetadata ? (
        <div>
          <NftCarousel activeIndex={1} animating={false} nftList={nftMetadata}></NftCarousel>
        </div>
        ) : <div></div>}
      </Col>
    </Row>
  );
};

export default NftMetadataPage;
