import React, { useState } from "react";
import { MainLayout } from "../../Components/Layout/MainLayout";
import { Col, Container, Row } from "react-bootstrap";
import { CustomCard } from "../../Components/custom-card/CustomCard";

const Home = () => {
  const [display, setDisplay] = useState([]);
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
