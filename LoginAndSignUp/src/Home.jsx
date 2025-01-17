import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login Successfully</h2>
        <Link
          to="/dashboard"
          className="btn border bg-success rounded-0 text-decoration-none"
        >
          Go to DashBoard
        </Link>
      </div>
    </div>
  );
}

export default Home;
