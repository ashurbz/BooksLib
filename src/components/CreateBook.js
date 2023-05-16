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
      <div>
        <input type="text" onChange={handleCreateBook} value={title} />
        <button onClick={handleClick}>Add Book</button>
      </div>
    </div>
  );
};

export default CreateBook;
