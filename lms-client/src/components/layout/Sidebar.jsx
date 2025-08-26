import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user } = useSelector((store) => store.userStore);
  return (
    <div className="bg-dark min-vh-100">
      <div className="side-top h-25 d-flex flex-column align-items-center justify-content-center p-3">
        <div className="top-image mb-2">
          <img
            src="https://picsum.photos/200/300"
            alt="User Avatar"
            className="rounded-circle"
            width="80"
            height="80"
          />
        </div>
        <div className="top-user text-white fw-bold">
          Welcome {user?.fullName}
        </div>
      </div>

      <div className="side-bottom  h-75 d-flex flex-column align-items-start justify-content-start p-3 text-white">
        <nav className="nav flex-column w-100">
          <Link className="nav-link  fw-semibold" to="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-link fw-semibold" to="/books">
            Books
          </Link>
          <Link className="nav-link  fw-semibold" to="/users">
            Users
          </Link>

          <Link className="nav-link fw-semibold" to="/admin">
            Admin
          </Link>
          <Link className="nav-link  fw-semibold" to="/borrow">
            Borrow
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
