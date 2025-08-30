import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user } = useSelector((store) => store.userStore);

  const [filteredMenuList, setFileteredMenuList] = useState([]);

  const menuList = [
    {
      link: "/dashboard",

      label: "Dashboard",
      isAdminOnly: false,
    },
    {
      link: "/books",

      label: "Books",
      isAdminOnly: true,
    },
    {
      link: "/admins",

      label: "Admin",
      isAdminOnly: true,
    },
    {
      link: "/borrows",

      label: "Borrows",
      isAdminOnly: false,
    },
    {
      link: "/reviews",

      label: "Reviews",
      isAdminOnly: true,
    },
    {
      link: "/profile",

      label: "Profile",
      isAdminOnly: false,
    },
  ];

  useEffect(() => {
    setFileteredMenuList(
      menuList.filter((m) => {
        return user.role == "admin" || !m.isAdminOnly;
      })
    );
  }, []);
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

      <ul className="list-unstyled">
        {filteredMenuList.map((menu) => {
          return (
            <li>
              <Link
                className="nav flex-column w-100 nav-link  fw-semibold h-75 d-flex flex-column align-items-start justify-content-center ps-5"
                to={menu.link}
              >
                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
