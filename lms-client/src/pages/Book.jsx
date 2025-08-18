import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";

const Book = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h5>Book Section</h5>
        </Col>
      </Row>
      <Button
        onClick={() => {
          alert("new books added here");
        }}
      >
        Add New Books
      </Button>

      <Row className="pt-5">
        <Table variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2023-08-10</td>
              <td>Dented</td>
              <td>Code</td>
              <td>Available</td>
              <td>
                <ButtonGroup className="gap-2">
                  <Button
                    className="bg-danger"
                    onClick={() => {
                      alert("Delete button clicked");
                    }}
                  >
                    Delete
                  </Button>

                  <Button
                    className="bg-warning"
                    onClick={() => {
                      alert("Update button clicked");
                    }}
                  >
                    Update
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2023-08-10</td>
              <td>Dented</td>
              <td>Code</td>
              <td>Available</td>
              <td>
                <ButtonGroup className="gap-2">
                  <Button
                    className="bg-danger"
                    onClick={() => {
                      alert("Delete button clicked");
                    }}
                  >
                    Delete
                  </Button>

                  <Button
                    className="bg-warning"
                    onClick={() => {
                      alert("Update button clicked");
                    }}
                  >
                    Update
                  </Button>
                </ButtonGroup>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>2023-08-10</td>
              <td>Dented</td>
              <td>Code</td>
              <td>Available</td>
              <td>
                <ButtonGroup className="gap-2">
                  <Button
                    className="bg-danger"
                    onClick={() => {
                      alert("Delete button clicked");
                    }}
                  >
                    Delete
                  </Button>

                  <Button
                    className="bg-warning"
                    onClick={() => {
                      alert("Update button clicked");
                    }}
                  >
                    Update
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Book;
