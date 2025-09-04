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
import { createBookAction } from "../features/books/bookAction";
// import slugify from "slugify";

const AddNewBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    publishedYear: "",
    bookTitle: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    // thumbnail: "",
  });

  const bookObject = [
    {
      title: "Add New Book",
      description: "Fill in the details of the book you want to add.",
      fields: [
        {
          name: "bookTitle",
          label: "BookTitle",
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    // dispatch add new book
    let data = await dispatch(createBookAction(formData));
    if (data.status == "success") {
      navigate("/books");
    }
  };
  const handleOnClick = () => {
    navigate("/books");
  };

  return (
    <>
      <Container fluid className="py-4 text-white">
        <Row className="align-items-center">
          <Col xs={12} md={8}>
            <h4>Add new books of your choice</h4>
          </Col>
          <Col xs={12} md={4} className="text-md-end text-center mt-3 mt-md-0">
            <Button onClick={handleOnClick} variant="secondary">
              Go Back
            </Button>
          </Col>
        </Row>

        <Row className="pt-4 d-flex justify-content-center align-items-center">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleOnSubmit}>
              {bookObject[0].fields.map((field, index) => (
                <FormGroup key={index} className="mb-3">
                  <FloatingLabel
                    controlId={`floatingInput-${index}`}
                    label={field.label || "Book Title"}
                  >
                    <Form.Control
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      onChange={(e) => {
                        let updatedForm = {
                          ...form,
                          [e.target.name]: e.target.value,
                        };
                        setForm(updatedForm);
                      }}
                    />
                  </FloatingLabel>
                </FormGroup>
              ))}

              <FormGroup className="mb-3">
                <FloatingLabel
                  controlId={`floatingInput-file`}
                  label="Upload Book Image"
                >
                  <Form.Control
                    name="image"
                    type="file"
                    placeholder="Upload book image"
                    accept="image/*"
                    onChange={(e) => {
                      let updatedForm = {
                        ...form,
                        [e.target.name]: e.target.files[0],
                      };
                      setForm(updatedForm);
                    }}
                  />
                </FloatingLabel>
              </FormGroup>

              <div className="d-flex flex-direction-column gap-2 align-items-center justify-content-center mt-5">
                <Button type="submit" variant="primary">
                  Submit
                </Button>

                <Button type="cancel" variant="danger">
                  Cancel
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddNewBook;
