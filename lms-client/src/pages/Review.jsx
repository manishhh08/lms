import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Review = () => {
  const { reviews } = useSelector((store) => store.reviewStore);
  const [reviewList, setReviewList] = useState([]);
  return (
    <Container>
      <Row className="mt-3 text-center">
        <Col>
          <h5>Review Section</h5>
        </Col>
      </Row>

      <Col className="d-flex justify-content-between size-5 ms-3 mt-3 fs-5">
        {reviewList.length} reviews found.
      </Col>

      <Row className="m-2 ">
        <Table variant="dark" className="text-center mt-3 ">
          <>
            <thead>
              <tr>
                <th>#</th>
                <th>Reviewer Name</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Review</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {reviewList.map((review, index) => (
                <tr key={review._id || index}>
                  <td>{index + 1}</td>
                  <td>{review.username || "Unknown Author"}</td>
                  <td>{review.bookTitle || "Untitled"}</td>
                  <td>{review.message || " "}</td>

                  {/* Status Switch */}
                  <td>
                    <Form.Check
                      type="switch"
                      id={`status-switch-${book._id}`}
                      checked={book.status === "active"}
                      onChange={(e) => {
                        dispatch(
                          updateReviewAction({
                            _id: book._id,
                            status: e.target.checked ? "active" : "inactive",
                          })
                        );
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        </Table>
      </Row>
    </Container>
  );
};

export default Review;
