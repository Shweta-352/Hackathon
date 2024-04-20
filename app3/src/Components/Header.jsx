import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {

  const navigate = useNavigate();
  const onclickcreateblog = () => {
    navigate("/CreateBlog");
  };
  const onclickmyblog = () => {
    navigate("/Myblog");
  };
  const onclickallblog = () => {
    navigate("/AllBlog");
  };
  return (
    <div>
      <div>
        <div className="mt-4">
          <input
            style={{ borderRadius: 15 }}
            className="searchbar"
            type="text"
            name=""
            id=""
            placeholder="   Search blogs"
          />
          <button className="btn btn-success m-3">search</button>
          <button style={{ float: "right" }} className="btn btn-success mt-3">
            {" "}
            logout
          </button>
          <div></div>
        </div>
      </div>

      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h1>Blogs</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={onclickmyblog}>
                    My Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={onclickallblog}>
                    All Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={onclickcreateblog}>
                    Add Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Show Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header
