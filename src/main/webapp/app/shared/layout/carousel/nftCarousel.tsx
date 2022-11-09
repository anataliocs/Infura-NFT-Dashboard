import React from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

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
}

const NftCarousel = (props: INftCarousel) => {

  let activeIndex = props.activeIndex;
  let animating = props.animating;

  const onExiting = () => {
    animating = true;
  }

  const onExited = () =>  {
    animating = false;
  }

  const next = () =>  {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        activeIndex = nextIndex;
  }

  const previous = () =>  {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        activeIndex = nextIndex;
  }

  const goToIndex = (newIndex) => {
        if (animating) return;
        activeIndex = newIndex;

  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={onExiting}
        onExited={onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>

        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>

    </div>
  );
};

export default NftCarousel;
