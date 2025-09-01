import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logoutAction } from "../../features/user/userAction";
// import { useUser } from "../../context/userContext";

const Header = () => {
  //   const { user, setUser } = useUser();
  // const [user, setUser] = useState({});
  const { user } = useSelector((store) => store.userStore);
  const dispatch = useDispatch();
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      variant="dark"
      data-bs-theme="dark"
      bg="dark"
    >
      <Container>
        <Navbar.Brand href="/">LMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            {user && user._id ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>

                <Nav.Link as={Link} to="/books/pub-books">
                  Books
                </Nav.Link>
                <Button
                  onClick={() => {
                    // remove user data onclick
                    dispatch(logoutAction());
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/books/pub-books">
                  Books
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
