import React, { useState } from "react";
import "./commonStyle.css";

const BookEdit = ({ book }) => {
  const [editText, setEditText] = useState(book.title);

  const handleOnChangeEdit = (e) => {
    setEditText(e.target.value);
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
      <button className="edit-btn">Save</button>
    </div>
  );
};

export default BookEdit;
