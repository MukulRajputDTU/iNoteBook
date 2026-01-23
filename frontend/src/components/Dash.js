import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dash = () => {
  const host = process.env.REACT_APP_URL;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await fetch(`${host}api/auth/getuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const json = await response.json();
        setUser(json);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getUser();
  }, [host]);

  const avatarUrl = user
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`
    : `https://ui-avatars.com/api/?name=Guest&background=random`;

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-light d-flex align-items-center border rounded-circle"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={avatarUrl}
            alt="Avatar"
            className="rounded-circle"
            width="32"
            height="32"
          />
        </button>
        <div
          className="dropdown-menu dropdown-menu-end p-3 shadow-lg"
          style={{ minWidth: "220px" }}
        >
          <div className="d-flex align-items-center mb-3">
            <img
              src={avatarUrl}
              alt="Avatar"
              className="rounded-circle me-2"
              width="48"
              height="48"
            />
            <div>
              <strong>{user?.name || "Guest"}</strong>
              <div className="text-muted small">{user?.email || "No email"}</div>
            </div>
          </div>

          <Link to="/dashboard" className="dropdown-item rounded">
            Dashboard
          </Link>
          <Link to="/logout" className="dropdown-item rounded">
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dash;