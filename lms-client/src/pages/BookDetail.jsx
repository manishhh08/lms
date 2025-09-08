import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { borrowBookAction } from "../features/borrows/borrowActions";

const BookDetail = () => {
  const location = useLocation();
  // console.log(location);
  const { bookid } = useParams();
  const [book, setBook] = useState({});
  const dispatch = useDispatch();

  //user from store
  const { user } = useSelector((store) => store.userStore);

  // pub books from store
  let { pubBook } = useSelector((store) => store.bookStore);

  useEffect(() => {
    let searchBook = pubBook.find((item) => item._id == bookid);
    setBook(searchBook);
  }, [pubBook]);

  const handleOnBookBorrow = async () => {
    let data = await dispatch(borrowBookAction({ bookId: book._id }));
  };
  return (
    <Container>
      <h3>Here are the details on the book that you selected</h3>
      <Row className="pt-5">
        <Col>
          <Card.Img
            variant="top"
            src={
              book?.thumbnail
                ? book.thumbnail.includes("http")
                  ? book.thumbnail
                  : import.meta.env.VITE_APP_API_URL + "/" + book.thumbnail
                : "/fallback-image.png" // optional fallback
            }
            alt={book?.bookTitle || "Book Thumbnail"}
            style={{ objectFit: "cover", height: "480px" }}
          />
        </Col>
        <Col md={6}>
          <h1>{book?.bookTitle}</h1>
          <h3 className="mt-4">{book?.author}</h3>
          <h5>{book?.publishedYear}</h5>
          {/* <Stars stars={book?.avgRatings} totalReviews={reviews.length} /> */}
          <p className="mt-5">{book?.description?.slice(0, 130)}...</p>
          <div className="mt-5">
            {user?._id ? (
              <Button
                disabled={!book?.isAvailable}
                onClick={handleOnBookBorrow}
              >
                {book?.isAvailable
                  ? "Borrow This Book"
                  : "Expected available date: " +
                    book?.expectedAvailable?.split("T")[0]}
              </Button>
            ) : (
              <Link
                to="/login"
                className=""
                state={{
                  from: { location },
                }}
              >
                <Button>Login to borrow</Button>
              </Link>
            )}
          </div>
        </Col>
      </Row>

      {/* review section */}

      <Row className="py-5 mt-3">
        <Col>
          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Description">
              {book?.description}
            </Tab>

            <Tab eventKey="reviews" title="Reviews">
              {/* <ReviewBlock pubReviews={pubReviews} /> */}
            </Tab>
          </Tabs>

          {/* content area  */}
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetail;
