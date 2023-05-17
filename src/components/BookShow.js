import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBook }) => {
  const [editShow, setEditShow] = useState(false);
  const handleDeleteBook = () => {
    deleteBook(book.bookId);
  };

  const handleBookEdit = () => {
    setEditShow(!editShow);
  };

  return (
    <div className="book">
      <h3>{editShow ? <BookEdit book={book} /> : book.title}</h3>
      <span onClick={handleDeleteBook} style={{ cursor: "pointer" }}>
        ❌
      </span>
      <div onClick={handleBookEdit} style={{ cursor: "pointer" }}>
        ✍🏻
      </div>
    </div>
  );
};

export default BookShow;
