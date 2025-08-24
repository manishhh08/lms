import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Col, Container, Row } from "react-bootstrap";

const PrivateLayout = () => {
  return (
    <Container fluid className="p-0">
      <Row className="g-0 min-vh-100">
        {" "}
        {/* remove gutters + full height */}
        {/* Sidebar */}
        <Col xs={3}>
          <Sidebar />
        </Col>
        {/* Main section */}
        <Col xs={9} className="d-flex flex-column">
          <Header />
          <main className="flex-grow-1">
            <Outlet />
          </main>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default PrivateLayout;
