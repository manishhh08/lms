import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custominput/CustomInput";
import { FaStar } from "react-icons/fa";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { addNewReviewAction } from "../../features/reviews/reviewAction";

export const ReviewForm = ({ borrow, setBorrow }) => {
  const dispatch = useDispatch();
  const { form, handleOnChange } = useForm({});
  const [ratings, setRatings] = useState(1);

  const [starRating, setStarRating] = useState(3);
  let startArray = ["", "", "", "", ""];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { _id, userId, bookId, bookTitle, thumbnail } = borrow;
    const obj = {
      ...form,
      ratings,
      borrowId: _id,
      userId,
      bookId,
      bookTitle,
      thumbnail,
    };

    if (window.confirm("Are you sure you want to leave this review?")) {
      const action = await dispatch(addNewReviewAction(obj));
      action && setBorrow({});
    }
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          label="Title"
          name="title"
          type="text"
          required
          disabled={true}
          value={borrow?.bookTitle}
          // placeholder={borrow?.bookTitle}
          onChange={handleOnChange}
        />

        <div className="mb-3">
          <label htmlFor="">Select Star: </label>
          {/* {startArray.map((item, index) => {
            return (
              <FaStar
                key={index}
                onClick={() => {
                  setStarRating(index + 1);
                }}
                className={index < starRating ? "text-warning" : ""}
              />
            );
          })} */}

          {new Array(5).fill("").map((item, i) => (
            <FaStar
              key={i}
              onClick={() => setRatings(i + 1)}
              className={i < ratings ? "text-warning" : ""}
            />
          ))}
        </div>
        <CustomInput
          label="Message"
          name="message"
          type="text"
          as="textarea"
          required
          rows="5"
          placeholder="Write detail review"
          onChange={handleOnChange}
        />

        <div className="d-grid py-2">
          <Button type="submit">Submit Review</Button>
        </div>
      </Form>
    </div>
  );
};
