import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

const AddNewBook = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>Add new books of your choice</Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Book Title"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Book Title" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Author"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Author" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Date(YYYY-MM-DD)"
              className="mb-3"
            >
              <Form.Control type="date" placeholder="2023-09-22" />
            </FloatingLabel>
            {/* <FloatingLabel
              controlId="floatingInput"
              label="ISBN"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="5" />
            </FloatingLabel> */}
            <Form.Select aria-label="Default select example" className="mb-3">
              {/* <option>IMDB rating</option> */}
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
            <FloatingLabel
              controlId="floatingInput"
              label="Description"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Description" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Genre"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Genre" />
            </FloatingLabel>
          </Col>
        </Row>
        <Button
          onClick={() => {
            alert("form submitted");
          }}
        >
          {" "}
          Submit
        </Button>
      </Container>
    </>
  );
};

export default AddNewBook;
