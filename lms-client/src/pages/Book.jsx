import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchAllBooksAction,
  updateBookAction,
} from "../features/books/bookAction";
import { setSelectedBook } from "../features/books/bookSlice";

const Book = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    // navigate("/books/add-book");
    navigate("/books/add-book");
  };

  const { book } = useSelector((store) => store.bookStore);

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    dispatch(fetchAllBooksAction());
  }, []);
  useEffect(() => {
    setBookList(book);
  }, [book]);
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h5>Book Section</h5>
        </Col>
      </Row>
      <Button onClick={handleOnClick}>Add New Books</Button>

      <Row className="m-2 ">
        <Table variant="dark" className="text-center mt-3">
          <>
            <thead>
              <tr>
                <th>#</th>
                <th>Thumbnail</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>IsAvailable</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* 
            <tbody>
              {bookList.map((book, index) => {
                return (
                  <tr key={book._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={
                          book?.thumbnail.includes("http")
                            ? book.thumbnail
                            : import.meta.env.VITE_APP_API_URL +
                              "/" +
                              book.thumbnail
                        }
                        width="80px"
                      />{" "}
                      {book.bookTitle}
                    </td>
                    <td>ss</td>
                    <td>{book.bookTitle}</td>
                    <td>{book.author}</td>
                    <td>{book.isAvailable ? "Available" : "Not Available"}</td>

                    <td>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        checked={book.status === "active" ? true : false}
                        onChange={(e) => {
                          dispatch(
                            updateBookAction({
                              _id: book._id,
                              status: e.target.checked ? "active" : "inactive",
                            })
                          );
                        }}
                      />
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        className="d-inline-flex justify-content-center me-2"
                      >
                        Delete
                      </Button>
                      <Button
                        variant="warning"
                        className="d-inline-flex justify-content-center"
                        onClick={() => {
                          // let selectedBook = book.find(
                          //   (b) => b._id == book._id
                          // );
                          // console.log(selectedBook);
                          // update the selected book
                          dispatch(setSelectedBook(book));
                          navigate("/books/edit-books");
                        }}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody> */}
            <tbody>
              {bookList.map((book, index) => (
                <tr key={book._id || index}>
                  <td>{index + 1}</td>

                  {/* Thumbnail + Book Title */}
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={
                          book.thumbnail
                            ? book.thumbnail.includes("http")
                              ? book.thumbnail
                              : import.meta.env.VITE_APP_API_URL +
                                "/" +
                                book.thumbnail
                            : "/fallback-image.png" // fallback if no thumbnail
                        }
                        // alt={book.bookTitle || "Book Thumbnail"}
                        width="50"
                        height="50"
                        style={{ objectFit: "cover", borderRadius: "4px" }}
                      />
                      {/* <span>{book.bookTitle}</span> */}
                    </div>
                  </td>

                  <td>{book.bookTitle || "Untitled"}</td>
                  <td>{book.author || "Unknown Author"}</td>
                  <td>{book.isAvailable ? "Available" : "Not Available"}</td>

                  {/* Status Switch */}
                  <td>
                    <Form.Check
                      type="switch"
                      id={`status-switch-${book._id}`}
                      checked={book.status === "active"}
                      onChange={(e) => {
                        dispatch(
                          updateBookAction({
                            _id: book._id,
                            status: e.target.checked ? "active" : "inactive",
                          })
                        );
                      }}
                    />
                  </td>

                  {/* Action Buttons */}
                  <td>
                    <Button
                      variant="danger"
                      className="d-inline-flex justify-content-center me-2"
                    >
                      Delete
                    </Button>
                    <Button
                      variant="warning"
                      className="d-inline-flex justify-content-center"
                      onClick={() => {
                        dispatch(setSelectedBook(book));
                        navigate("/books/edit-books");
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        </Table>
      </Row>
    </Container>
  );
};

export default Book;
