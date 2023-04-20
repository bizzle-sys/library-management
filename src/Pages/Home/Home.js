import React, { useEffect, useState } from "react";
import { MainLayout } from "../../Components/Layout/MainLayout";
import { Col, Container, Row } from "react-bootstrap";
import { CustomCard } from "../../Components/custom-card/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooksActions } from "../book/BookAction";

const Home = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState([]);
  const { book } = useSelector((state) => state.book);
  useEffect(() => {
    !display.length && dispatch(getAllBooksActions());
    setDisplay(book);
  }, [dispatch, book, display]);

  return (
    <MainLayout>
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>This is Our Library</h1>
            <div className="d-flex justify-content-between mt-5">
              <div>{display.length} Books Found!</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between flex-wrap gap-2">
              {display.map((item) => (
                <CustomCard key={item.id} {...item} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Home;
