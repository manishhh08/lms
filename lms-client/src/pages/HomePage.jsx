import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllPublicBooksAction } from "../features/books/bookAction";

const HomePage = () => {
  const dispatch = useDispatch();

  let { pubBook } = useSelector((store) => store.bookStore);

  useEffect(() => {
    dispatch(fetchAllPublicBooksAction());
  }, []);
  return (
    <>
      <h3 className="text-center mt-4">Welcome to Library Management System</h3>
      <Carousel className="m-5  justify-content-center align-items-center">
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            style={{ width: "80%", maxHeight: "300px", objectFit: "cover" }}
            src="/assets/img1.jpg"
            alt="first slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            style={{ width: "80%", maxHeight: "300px", objectFit: "cover" }}
            src="/assets/img2.jpg"
            alt="first slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            style={{ width: "80%", maxHeight: "300px", objectFit: "cover" }}
            src="/assets/img3.jpg"
            alt="first slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* New books */}

      <Container>
        <h4 className="ms-4">New arrival books </h4>
        <hr className="mx-auto" />
        <Row className="d-flex gap-4 m-4 flex-wrap w-full">
          {pubBook.map((book) => {
            return (
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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

        {/* Recommended books */}
        <h4 className="ms-4">Recommended for you </h4>
        <hr />
        <Row className="d-flex gap-4 m-4 flex-wrap w-full pb-0 mb-0">
          {pubBook.map((book) => {
            return (
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
    </>
  );
};

export default HomePage;
