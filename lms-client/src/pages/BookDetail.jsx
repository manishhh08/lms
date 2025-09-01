import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const BookDetail = () => {
  const location = useLocation();
  console.log(location);
  const { bookid } = useParams();
  const [book, setBook] = useState({});

  //   book id
  console.log(bookid);

  // pub books from store
  let { pubBook } = useSelector((store) => store.bookStore);

  useEffect(() => {
    let searchBook = pubBook.find((item) => item._id == bookid);
    setBook(searchBook);
  }, [pubBook]);

  return (
    <Container>
      <h3>Here are the details on the book that you selected</h3>
      <Row>
        <Col>Image will be used here</Col>
        <Col>
          Book details will be here
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetail;
