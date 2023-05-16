import React from "react";

const BookShow = ({ book, deleteBook }) => {
  const handleDeleteBook = () => {
    deleteBook(book.bookId);
  };

  return (
    <div className="book">
      <h3>{book.title}</h3>
      <span onClick={handleDeleteBook} style={{ cursor: "pointer" }}>
        ❌
      </span>
      <div style={{ cursor: "pointer" }}>✍🏻</div>
    </div>
  );
};

export default BookShow;
