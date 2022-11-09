import React from 'react';

import {
  UncontrolledCarousel,
} from 'reactstrap';
import {getNftMetaData, NftMetadataResponse} from "app/modules/nftmetadata/nftmetadata.reducer";

const items = [
  {
    src: 'https://via.placeholder.com/750',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://via.placeholder.com/850',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://via.placeholder.com/950',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

export interface INftCarousel {
  activeIndex: number;
  animating: boolean;
  nftList: NftMetadataResponse[];
}

let nfts;

const NftCarousel = (props: INftCarousel) => {

  const getNfts = () => {
    return props.nftList.map(nft => ({
      src: nft.metadata.image,
      altText: nft.metadata.name,
      caption: nft.metadata.description
    }));
  };

  return (
    <div>
        <UncontrolledCarousel items={getNfts()} />
    </div>
  );
};

export default NftCarousel;
