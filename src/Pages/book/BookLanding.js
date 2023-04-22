import React, { useEffect } from "react";
import { MainLayout } from "../../Components/Layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Rating } from "../../Components/rating/Rating";
import { Reviews } from "../../Components/reviews/Reviews";

const BookLanding = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { book } = useSelector((state) => state.book);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (!book.length) {
      navigate("/");
    }
  });

  const selectedBook = book.find((item) => item.id === bookId) || {};

  const { id, title, name, year, summary, url } = selectedBook;
  const handleOnBorrow = () => {
    if (user.uid) {
      // create borrow history table and add following

      const obj = {};
      return;
    }
  };
  return (
    <MainLayout>
      <Container className="mt-4   ">
        <Row className=" ">
          <Col md="4">
            <img src={url} width="100%" alt="" />
          </Col>
          <Col>
            <h1>{title}</h1>
            <p>
              {name} - {year}
              <Rating />
            </p>
            <p>
              {!user?.uid ? (
                <Button disabled={true}>Login to borrow</Button>
              ) : (
                <Button onClick={handleOnBorrow}>Borrow Book</Button>
              )}
            </p>
            <p className="mt-3">Summary: {summary}</p>
          </Col>
        </Row>
        <Row className=" mt-5">
          <Col>
            <h3>Reviews</h3>
            <div className="review-list">
              <Reviews />
              <Reviews />
              <Reviews />
              <Reviews />
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default BookLanding;
