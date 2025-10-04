import { useDispatch, useSelector } from "react-redux";
import { fetchAllPublicBooksAction } from "../features/books/bookAction";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const PubBooks = () => {
  const dispatch = useDispatch();
  const { pubBook } = useSelector((store) => store.bookStore);

  useEffect(() => {
    dispatch(fetchAllPublicBooksAction());
  }, [dispatch]);

  return (
    <Container>
      <h2 className="ms-4">Our Books</h2>
      <Row className="g-4 m-4">
        {pubBook.map((book) => (
          <Col key={book._id} xs={12} sm={6} md={4} lg={3}>
            <Link
              to={`/book-detail/${book._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="h-100 book-card">
                <Card.Img
                  variant="top"
                  src={
                    book.thumbnail
                      ? book.thumbnail.includes("http")
                        ? book.thumbnail
                        : import.meta.env.VITE_APP_API_URL +
                          "/" +
                          book.thumbnail
                      : "/assets/bookloader.gif"
                  }
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>{book?.bookTitle}</Card.Title>
                  <Card.Text>{book?.publishedYear}</Card.Text>
                  <Card.Text>
                    {book?.description
                      ? book.description.slice(0, 200) + "..."
                      : ""}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PubBooks;
