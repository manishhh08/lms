import { useDispatch, useSelector } from "react-redux";
import { fetchAllPublicBooksAction } from "../features/books/bookAction";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import CustomCard from "../components/customCard/CustomCard";

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
            <CustomCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PubBooks;
