import React from "react";
import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";

const UserDetail = () => {
  const { user } = useSelector((store) => store.userStore);
  const [editMode, setEditMode] = useState(false);
  return (
    // <Container fluid className="mt-2">
    //   <h4>Update your details</h4>
    // </Container>
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card bg="secondary" text="light" className="shadow-lg rounded-4">
            <Card.Body className="text-center">
              <Card.Img
                variant="top"
                src={user.thumbnail || "https://via.placeholder.com/150"}
                alt="User Avatar"
                className="rounded-circle mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />

              {!editMode ? (
                <>
                  <Card.Title className="fs-4">
                    {/* {formatName(user.fullName)} */}
                    {user?.fullName}
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    {user.role || "Member"}
                  </Card.Subtitle>

                  <ListGroup variant="flush" className="text-start">
                    <ListGroup.Item className="bg-secondary text-light">
                      <strong>Email:</strong> {user.email}
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-secondary text-light">
                      <strong>Phone:</strong> {user.phone || "N/A"}
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-secondary text-light">
                      <strong>Status:</strong>{" "}
                      <Badge
                        bg={user.status === "active" ? "success" : "danger"}
                      >
                        {user.status}
                      </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-secondary text-light">
                      <strong>Joined:</strong>{" "}
                      {new Date(user.createdAt).toLocaleDateString()}
                    </ListGroup.Item>
                  </ListGroup>

                  <div className="d-flex justify-content-center mt-4">
                    <Button
                      variant="warning"
                      className="me-2"
                      onClick={() => setEditMode(true)}
                    >
                      Edit Profile
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        alert("delete feature coming soon");
                      }}
                    >
                      {/* <Button variant="danger" onClick={handleDelete}> */}
                      Delete Profile
                    </Button>
                  </div>
                </>
              ) : (
                <Form
                  onSubmit={() => {
                    alert("save function coming soon");
                  }}
                  className="text-start"
                >
                  {/* <Form onSubmit={handleSave} className="text-start"> */}
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={form?.fullName}
                      onChange={(e) =>
                        setForm({ ...form, fullName: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={form.email}
                      disabled // usually emails are not editable
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      value={form.phone || ""}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      type="text"
                      value={form.role}
                      disabled={user.role !== "admin"} // only admins can change
                      onChange={(e) =>
                        setForm({ ...form, role: e.target.value })
                      }
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between">
                    <Button type="submit" variant="success">
                      Save
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setEditMode(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetail;
