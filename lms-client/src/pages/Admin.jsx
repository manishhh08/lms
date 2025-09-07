import React from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../features/user/setUser";

const Admin = () => {
  const { user } = useSelector((store) => store.userStore);
  const dispatch = useDispatch();
  // const [editMode, setEditMode] = useState(false);
  return (
    <Container fluid className="mt-2">
      <h4 className="mt-2 text-center">Admin Dashboard</h4>
      <Row className="table-responsive ">
        <Table variant="dark" className="align-middle ">
          <thead>
            <tr>
              <th className="ps-5">#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user && user.length > 0 ? (
              user.map((u, i) => (
                <tr key={u._id}>
                  <td>{i + 1}</td>

                  <td>{u.fullName}</td>

                  <td>
                    <span className="badge bg-info text-dark">{u.role}</span>
                  </td>

                  {/* Active/Inactive toggle */}
                  {/* <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={user.isActive}
                        onChange={() => handleEdit(user)}
                      />
                    </div>
                    <p>Action area</p>
                  </td> */}

                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      className="me-2"
                      // onClick={() =>
                      //   window.confirm("Delete this user?") &&
                      //   handleDelete(user._id)
                      // }
                    >
                      Delete
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      // onClick={() => handleEdit(user)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Admin;
