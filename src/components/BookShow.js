import React from "react";

const BookShow = ({ book }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <span>❌</span>
    </div>
  );
};

export default BookShow;
