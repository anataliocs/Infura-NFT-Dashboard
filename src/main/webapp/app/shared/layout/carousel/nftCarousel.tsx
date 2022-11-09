import './nftCarousel.scss';
import React from 'react';

import {
  UncontrolledCarousel,
} from 'reactstrap';
import {NftMetadataResponse} from "app/modules/nftmetadata/nftmetadata.reducer";

export interface INftCarousel {
  nftList: NftMetadataResponse[];
}

const NftCarousel = (props: INftCarousel) => {

  const getNfts = () => {
    return props.nftList
      .filter(nft => nft.metadata)
      .filter(nft => nft.metadata.image)
      .map(nft => ({
        src: nft.metadata.image.match("ipfs") ? "https://chris-anatalio.infura-ipfs.io/ipfs/" + nft.metadata.ipfsHash : nft.metadata.image,
        altText: nft.metadata.name,
        caption: nft.metadata.description,
        header: nft.metadata.name
      }));
  };

  return (
    <div >
      <UncontrolledCarousel items={getNfts()}/>
    </div>
  );
};

export default NftCarousel;
