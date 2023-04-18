import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Link } from "react-router-dom";

export const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <div className="left bg-dark p-2 pt-5 ">
        <div className="title text-center mt-3 fs-2">user name</div>
        <hr />
        <div className="sidebar  fw-bolder ">
          <ul>
            <li>
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            {/* for admin only */}
            <li>
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/clients">
                Clients
              </Link>
            </li>

            {/* for all user type */}

            <li>
              <Link className="nav-link" to="/history">
                History
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        {/* Header section */}
        <Header />
        {/* Main content area */}
        <div className="main">{children}</div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
