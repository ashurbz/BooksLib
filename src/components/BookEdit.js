import React, { useState } from "react";
import "./commonStyle.css";

const BookEdit = ({ book, editBook, handleSave }) => {
  const [editText, setEditText] = useState(book.title);
  console.log(book);

  const handleOnChangeEdit = (e) => {
    setEditText(e.target.value);
  };

  const handleClickSave = () => {
    editBook(book.bookId, editText);
    handleSave();
  };

  return (
    <div className="edit-container">
      <input
        placeholder="Edit Book"
        className="edit-input"
        type="text"
        onChange={handleOnChangeEdit}
        value={editText}
      />
      <button onClick={handleClickSave} className="edit-btn">
        Save
      </button>
    </div>
  );
};

export default BookEdit;
