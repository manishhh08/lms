import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="bg-dark p-5 text-white">
      <Row className="d-flex flex-direction-column justify-content-between">
        <Col>Books at your fingertips </Col>
        <Col>Built on Security, Designed for You</Col>
        <Col>Copyright © 2025</Col>
      </Row>
    </Container>
  );
};

export default Footer;
