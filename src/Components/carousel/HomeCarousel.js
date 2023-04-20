import React from "react";
import { Carousel } from "react-bootstrap";
import a from "../../assets/a.jpg";
import b from "../../assets/b.jpg";
import c from "../../assets/c.jpg";
import "./homeCarousel.css";

export const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={a} alt="First slide" />
        <Carousel.Caption>
          <h3>Welcome to digital library</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={b} alt="Second slide" />

        <Carousel.Caption>
          <h3>One place for all the books</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={c} alt="Third slide" />

        <Carousel.Caption>
          <h3>Explor the book worlds</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
