import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { CustomCarousel } from "../components/customCarouse/CustomCarousel";
import { CustomCard } from "../components/customCard/CustomCard";
import { Stars } from "../components/stars/Stars";
import axios from "axios";
import { getAllBooksApi } from "../features/books/booksApi";

const Search = () => {
  const [searchedBooks, setSearchBooks] = useState([]);
  const { query } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPage, setTotalPage] = useState(0);

  const page = searchParams.get("page") ?? 1;

  const [currentPage, setCurrentPage] = useState(parseInt(page));

  const location = useLocation();

  console.log(location);

  let pageItems = [];
  for (let number = 1; number <= totalPage; number++) {
    pageItems.push(
      <Pagination.Item
        key={number}
        active={number === parseInt(page)}
        href="#"
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  const fetchSearchData = async () => {
    let data = await getAllBooksApi(true, query, currentPage);
    setTotalPage(data.totalPage);
    setSearchBooks(data.books);
  };

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set("page", currentPage);
    setSearchParams(newSearchParams);

    fetchSearchData();
  }, [currentPage]);

  //   const handleOnSearch = (e) => {
  //     const { value } = e.target;
  //     console.log(value);
  //     setSearchBooks(
  //       pubBooks.filter(({ title }) =>
  //         title.toLowerCase().includes(value.toLowerCase())
  //       )
  //     );
  //   };

  return (
    <>
      {/* book list  */}
      <Container>
        <Row>
          <Col className="d-flex justify-content-between mt-5">
            <label htmlFor="">{searchedBooks?.length || 0} books found!</label>
          </Col>
        </Row>
        <hr />
        <Row className="mb-4">
          <Col className="d-flex gap-4 flex-wrap justify-content-center">
            {searchedBooks.map((book) => (
              <Link key={book._id} to={"/book-detail/" + book._id}>
                <CustomCard {...book} />
              </Link>
            ))}
          </Col>
        </Row>
        <Pagination>{pageItems}</Pagination>
      </Container>
    </>
  );
};

export default Search;
