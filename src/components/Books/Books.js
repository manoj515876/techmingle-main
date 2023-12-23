import React from "react";
import { Link } from "react-router-dom";
import "../Books/books.css";
import BookImage from "../assets/books-bgs.jpg";
const Books = () => {
  return (
    <>
      <div className="BooksbgImage">
        <img src={BookImage} alt="booksbanner" />
      </div>
      <div className="BooksButtons">
        <div className="ViewBooks">
          <Link to="../ViewBooks"> Second hand books </Link>
        </div>
        <div className="Publish">
          <Link to="../PublishBooks"> Publish Books</Link>
        </div>
      </div>
      <div className="BooksContainer">
        <div className="UploadBooks">
          <ul>
            <li>
              If you want to sell old books of engineering then this is the
              platform.
            </li>
            <li>
              You can click photos of front cover pages of book while
              submitting.
            </li>
            <li>
              You can click photos of front cover pages of book while
              submitting.
            </li>
          </ul>
        </div>
        <div className="PublishBooks">
          <ul>
            <li>Publish mini books related to projects.</li>
            <li>
              Publish mini books related to different upcoming technology.
            </li>
            <li>Access to all books</li>
            <li>
              Create books in which there are stories related to technology.
            </li>
            <li>
              Publish books where geeks can actually get better insights.{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Books;
