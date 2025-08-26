import React, { useEffect, useState } from "react";
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
    <div>
      BookDetail
      <h2>{book?.title}</h2>
      <div>{book?.author}</div>
    </div>
  );
};

export default BookDetail;
