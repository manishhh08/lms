import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../features/reviews/reviewSlice";
import { useEffect } from "react";
import { fetchAllReviewAction } from "../features/reviews/reviewAction";

const Review = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((store) => store.reviewStore);
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
                  <td>{review.ratings}</td>
                  <td>{review.status}</td>
                  {/* <td>
                    <Form.Check
                      type="switch"
                      id={`status-switch-${review._id}`}
                      checked={review.status === "active"}
                      onChange={(e) => {
                        dispatch(
                          updateReviewAction({
                            _id: review._id,
                            status: e.target.checked ? "active" : "inactive",
                          })
                        );
                      }}
                    />
                  </td> */}
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
