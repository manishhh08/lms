import { useDispatch, useSelector } from "react-redux";
import { fetchAllPublicBooksAction } from "../features/books/bookAction";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PubBooks = () => {
  const dispatch = useDispatch();

  const { pubBook } = useSelector((store) => store.bookStore);
  const [pubBookList, setPubBookList] = useState([]);
  useEffect(() => {
    dispatch(fetchAllPublicBooksAction());
  }, []);

  return (
    <Container>
      <h2 className="ms-4">Our Books</h2>
      <Row className="d-flex gap-4 m-4 flex-wrap w-full mb-0">
        {pubBook.map((book) => {
          return (
            <Card style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Img
                variant="top"
                src={
                  book.thumbnail
                    ? book.thumbnail.includes("http")
                      ? book.thumbnail
                      : import.meta.env.VITE_APP_API_URL + "/" + book.thumbnail
                    : "/assets/bookloader.gif"
                }
                style={{ objectFit: "cover", height: "250px" }}
              />
              <Card.Body>
                <Card.Title>{book?.bookTitle}</Card.Title>
                <Card.Text>{book?.publishedYear}</Card.Text>
                <Card.Text>{book?.description.slice(0, 200)}</Card.Text>
                <Link to={"/book-detail/" + book._id}>
                  <Button variant="primary">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default PubBooks;
