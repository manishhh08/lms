import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <Container className="bg-dark mt-5 border rounded w-75">
      <Row>
        {/* <Col md={6} className="p-5 rounded text-white">
          Financial Tips
        </Col> */}
        <Col>
          {/* Sign up form here */}
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
