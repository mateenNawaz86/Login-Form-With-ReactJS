import React from "react";
import { Link } from "react-router-dom";
import "./Links.css";

const Links = () => {
  return (
    <div className="container_div">
      <Link
        to={{ pathname: "https://web.facebook.com/?_rdc=1&_rdr" }}
        target="_blank"
      >
        <i className="fab fa-facebook-square"></i>
      </Link>
      <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank">
        <i className="fab fa-instagram-square"></i>
      </Link>
      <Link to={{ pathname: "https://twitter.com/home" }} target="_blank">
        <i className="fab fa-twitter-square"></i>
      </Link>
      <Link
        to={{ pathname: "https://www.linkedin.com/in/mateenmirani/" }}
        target="_blank"
      >
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link to={{ pathname: "https://www.google.com/" }} target="_blank">
        <i className="fab fa-google"></i>
      </Link>
    </div>
  );
};

export default Links;
