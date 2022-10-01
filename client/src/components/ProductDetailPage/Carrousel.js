import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

export function Slider({ images }) {
  const allImages = images?.map((link, i) => (
    <Carousel.Item key={i}>
      <img
        className="d-block w-100"
        src={`https://vehiculum-coding-challenge.herokuapp.com${link.l}`}
        alt="First slide"
      />
    </Carousel.Item>
  ));
  return <Carousel>{allImages}</Carousel>;
}
