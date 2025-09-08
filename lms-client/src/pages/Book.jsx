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
  deleteBookAction,
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

      <Col className="d-flex justify-content-between size-5 ms-3 mt-3 fs-4">
        {bookList.length} books found.
      </Col>

      <Row className="m-2 ">
        <Table variant="dark" className="text-center mt-3 ">
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
                            : "/fallback-image.png"
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
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this book?"
                          )
                        ) {
                          console.log(book._id);
                          dispatch(deleteBookAction(book._id));
                        }
                      }}
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
