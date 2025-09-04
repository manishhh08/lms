import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBorrowAction,
  returnBookAction,
} from "../features/borrows/borrowActions";

const Borrow = () => {
  const { borrows } = useSelector((store) => store.borrowStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBorrowAction());
  }, []);

  return (
    <div className="p-5">
      <h1>Your Borrows</h1>
      <p>Manage your borrows, add new ones, or update existing entries.</p>
      <hr />

      <Table hover variant="dark" className="text-center mt-3">
        <thead>
          <tr>
            {/* <th>
              <Form.Check type="checkbox" value="all" />
            </th> */}
            <th>#</th>
            <th>Book Title</th>
            <th>Expected Date</th>
            <th>Status</th>
            <th>Returned Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrows.map((borrow, index) => {
            return (
              <tr key={borrow._id}>
                {/* <td>
                  <Form.Check type="checkbox" value={book.id} />
                </td> */}
                <td>{index + 1}</td>
                {/* <td>
                  <img
                    src={
                      borrow.thumbnail.includes("http")
                        ? borrow.thumbnail
                        : import.meta.env.VITE_APP_API_URL +
                          "/" +
                          borrow.thumbnail
                    }
                    width="80px"
                  />{" "}
                  {borrow.bookTitle}
                </td> */}
                <td>{borrow.dueDate}</td>
                <td>{borrow.status}</td>
                <td>{borrow?.returnDate || ""}</td>
                <td>
                  {borrow.status == "borrowed" ? (
                    <Button
                      variant="danger"
                      className="d-inline-flex justify-content-center me-2"
                      // onClick={() => {
                      //   dispatch(returnBookAction(borrow._id));
                      // }}
                    >
                      Return
                    </Button>
                  ) : borrow.status == "returned" ? (
                    <Button
                      variant="warning"
                      className="d-inline-flex justify-content-center me-2"
                    >
                      Review
                    </Button>
                  ) : (
                    "Reviewed"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Borrow;
