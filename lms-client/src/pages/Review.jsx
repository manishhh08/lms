import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllReviewAction,
  updateReviewStatusAction,
} from "../features/reviews/reviewAction";

const Review = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((store) => store.reviewStore.reviews);
  useEffect(() => {
    dispatch(fetchAllReviewAction());
  }, [dispatch]);
  return (
    <Container>
      <Row className="mt-3 text-center">
        <Col>
          <h5>Review Section</h5>
        </Col>
      </Row>

      <Col className="d-flex justify-content-between size-5 ms-3 mt-3 fs-5">
        {reviews.length} reviews found.
      </Col>

      <Row className="m-2 ">
        <Table variant="dark" className="text-center mt-3 ">
          <>
            <thead>
              <tr>
                <th>#</th>
                <th>Reviewer Name</th>
                <th>Book Title</th>
                <th>Review</th>
                <th>Ratings</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {reviews.map((review, index) => (
                <tr key={review._id || index}>
                  <td>{index + 1}</td>
                  <td>{review.username || "Unknown Author"}</td>
                  <td>{review.bookTitle || "Untitled"}</td>
                  <td>{review.message || " "}</td>
                  {/* <td>{review.ratings}</td> */}
                  <td>
                    {[...Array(review.ratings)].map((_, i) => (
                      <span key={i} style={{ color: "#FFD700" }}>
                        ★
                      </span>
                    ))}
                    {[...Array(5 - review.ratings)].map((_, i) => (
                      <span key={i} style={{ color: "#ccc" }}>
                        ★
                      </span>
                    ))}
                  </td>

                  <td>
                    <Form.Check
                      type="switch"
                      id={`status-switch-${review._id}`}
                      checked={review.status === "active"}
                      onChange={(e) => {
                        dispatch(
                          updateReviewStatusAction({
                            _id: review._id,
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
