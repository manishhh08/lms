import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setBook } from "../features/books/bookSlice";

const AddNewBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setAddBook({
      ...addBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // dispatch add new book

    dispatch(setBook(addBook));

    // back to book list
    navigate("/");
  };
  const handleOnClick = () => {
    navigate("/books");
  };

  const [addBook, setAddBook] = useState({
    year: new Date().toISOString().split("T")[0],
    bookTitle: "",
    author: "",
    genre: "",
    imdb: "",
    description: "",
  });
  return (
    <>
      <Container>
        <Row>
          <Col>Add new books of your choice</Col>
        </Row>
        <Button onClick={handleOnClick}>Go Back</Button>
      </Container>

      <Container className="pt-5">
        <Form onSubmit={handleOnSubmit}>
          <FormGroup>
            <FloatingLabel
              controlId="floatingInput"
              label="Book Title"
              className="mb-3"
              onChange={handleOnChange}
              value={addBook.bookTitle}
            >
              <Form.Control type="text" placeholder="Book Title" required />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Author"
              className="mb-3"
              onChange={handleOnChange}
              value={addBook.author}
            >
              <Form.Control type="text" placeholder="Author" required />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Date(YYYY-MM-DD)"
              className="mb-3"
              onChange={handleOnChange}
              value={addBook.date}
            >
              <Form.Control type="date" placeholder="2023-09-22" required />
            </FloatingLabel>

            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              onChange={handleOnChange}
              value={addBook.imdb}
            >
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
              onChange={handleOnChange}
              value={addBook.description}
            >
              <Form.Control type="text" placeholder="Description" required />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Genre"
              className="mb-3"
              onChange={handleOnChange}
              value={addBook.genre}
            >
              <Form.Control type="text" placeholder="Genre" required />
            </FloatingLabel>
          </FormGroup>
        </Form>
        <Button type="submit">Submit</Button>
      </Container>
    </>
  );
};

export default AddNewBook;
