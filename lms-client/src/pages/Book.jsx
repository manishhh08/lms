import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/add-book");
  };

  const { book } = useSelector((store) => store.bookStore);

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h5>Book Section</h5>
        </Col>
      </Row>
      <Button onClick={handleOnClick}>Add New Books</Button>

      <Row className="pt-5">
        <Table variant="dark">
          <>
            <thead>
              <tr>
                <th>#</th>
                <th>Year</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {book.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center">
                    No Books Added
                  </td>
                </tr>
              ) : (
                book.map((b, index) => {
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{b.year}</td>
                    <td>{b.bookTitle}</td>
                    <td>{b.author}</td>
                    <td>{b.genre}</td>
                    {/* <td>{b.imdb}</td>
                    <td>{b.description}</td> */}
                    <td>
                      <ButtonGroup className="gap-2">
                        <Button
                          className="btn btn-danger"
                          onClick={() => {
                            alert("Delete");
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          className="btn btn-warning"
                          onClick={() => {
                            alert("Update");
                          }}
                        >
                          Update
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>;
                })
              )}
            </tbody>
          </>
        </Table>
      </Row>
    </Container>
  );
};

export default Book;
