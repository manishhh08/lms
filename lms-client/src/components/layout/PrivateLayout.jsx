import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Col, Container, Row } from "react-bootstrap";

const PrivateLayout = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={3}>
          <Row>
            <Sidebar />
          </Row>
        </Col>

        <Col xs={9}>
          <Row>
            <Header />
            <main className="main">
              {/* Content goes here */}
              <Outlet />
            </main>
            <Footer />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivateLayout;
