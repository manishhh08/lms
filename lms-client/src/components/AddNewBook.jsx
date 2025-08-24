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

  const [addBook, setAddBook] = useState({
    publishedYear: 0,
    bookTitle: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
  });

  const bookObject = [
    {
      title: "Add New Book",
      description: "Fill in the details of the book you want to add.",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          placeholder: "Enter book title",
        },
        {
          name: "author",
          label: "Author",
          type: "text",
          placeholder: "Enter author's name",
        },
        {
          name: "isbn",
          label: "ISBN",
          type: "number",
          placeholder: "Enter ISBN number",
        },
        {
          name: "publishedYear",
          label: "Published Date",
          type: "number",
          placeholder: "Select published date",
        },
        {
          name: "genre",
          label: "Genre",
          type: "text",
          placeholder: "Enter book genre",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          placeholder: "Enter a brief description of the book",
        },
      ],
      submitButton: "Add Book",
      cancelButton: "Cancel",
    },
  ];
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
              label="Year"
              className="mb-3"
              onChange={handleOnChange}
              value={addBook.date}
            >
              <Form.Control type="number" placeholder="1990" required />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="ISBN"
              className="mb-3"
              onChange={handleOnChange}
              value={addBook.isbn}
            >
              <Form.Control type="number" placeholder="Author" required />
            </FloatingLabel>
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
