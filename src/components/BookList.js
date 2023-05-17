import React from "react";
import BookShow from "./BookShow";
import "./commonStyle.css";

const BookList = ({ createBook, deleteBook, editBook }) => {
  return (
    <div className="book-list">
      {createBook.map((book) => {
        return (
          <BookShow book={book} deleteBook={deleteBook} editBook={editBook} />
        );
      })}
    </div>
  );
};

export default BookList;
