import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBook, editBook }) => {
  const [editShow, setEditShow] = useState(false);
  const handleDeleteBook = () => {
    deleteBook(book.bookId);
  };

  const handleBookEdit = () => {
    setEditShow(!editShow);
  };

  const handleSave = () => {
    setEditShow(false);
  };

  return (
    <div className="book">
      <h3>
        {editShow ? (
          <BookEdit handleSave={handleSave} editBook={editBook} book={book} />
        ) : (
          book.title
        )}
      </h3>
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
