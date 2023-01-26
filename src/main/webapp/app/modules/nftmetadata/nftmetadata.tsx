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
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
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

  return (
    <div>
      <Row>
        <Col md="9">

          <Form onSubmit={handleNftByAddress}>

            <ValidatedField
              name="tokenAddress"
              label="Deployed Contract Address"
              placeholder="Contract Address i.e. 0xa9cb55d05d3351dcd02dd5dc4614e764ce3e1d6e"
              required
              autoFocus
              data-cy="tokenAddress"
              validate={{required: 'Token address cannot be empty!'}}
              error={errors.tokenAddress}
              isTouched={touchedFields.tokenAddress}
            />

            <Button size="sm" color="primary" type="submit" data-cy="submit">
              Search
            </Button>

          </Form>

        </Col>
      </Row>
      <Row>
        <Col md="3">
          <p></p>
        </Col>
        <Col md="6" className="align-items-center">

          <br/>
          <p>NFT Gallery Powered by &nbsp;<a href="https://infura.io"> <img src="content/images/logo-infura2.png"
                                                                            alt="Logo"/></a></p>
          {nftMetadata ? (
            <div className="nftCarouselContainer">
              <NftCarousel nftList={nftMetadata}></NftCarousel>
            </div>
          ) : <div></div>}
        </Col>

        <Col md="3">
          <p></p>
        </Col>
      </Row>
    </div>
  );
};

export default NftMetadataPage;
