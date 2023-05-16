import React from "react";
import BookShow from "./BookShow";

const BookList = ({ createBook }) => {
  console.log(createBook);

  return (
    <div>
      {createBook.map((book) => {
        return <BookShow book={book} />;
      })}
    </div>
  );
};

export default BookList;
