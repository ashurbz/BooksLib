import React from "react";
import BookShow from "./BookShow";
import "./commonStyle.css";

const BookList = ({ createBook }) => {
  console.log(createBook);

  return (
    <div className="book-list">
      {createBook.map((book) => {
        return <BookShow book={book} />;
      })}
    </div>
  );
};

export default BookList;
