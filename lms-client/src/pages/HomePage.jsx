import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  let { pubBook } = useSelector((store) => store.bookStore);

  return (
    <div>
      <h2>Welcome to home page</h2>
      {pubBook.map((book) => {
        return (
          <div>
            <Link to={"/book-detail/" + book._id}>{book.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
