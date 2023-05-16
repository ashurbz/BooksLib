import React, { useState } from "react";

const CreateBook = ({ create }) => {
  const [title, settitle] = useState("");

  const handleCreateBook = (e) => {
    settitle(e.target.value);
  };

  const handleClick = () => {
    create(title);
    settitle(" ");
  };

  return (
    <div>
      <div className="create-book">
        <input
          className="input-create"
          type="text"
          onChange={handleCreateBook}
          value={title}
          placeholder="Create Book"
        />
        <button className="btn-create" onClick={handleClick}>
          Add Book
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
