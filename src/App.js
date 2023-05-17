import { useState } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";

function App() {
  const [book, setBook] = useState([]);

  const bookId = Math.trunc(Math.random() * 9999);

  const deleteBook = (id) => {
    const updatedBook = book.filter((book) => {
      return book.bookId !== id;
    });
    setBook(updatedBook);
  };

  const create = (title) => {
    if (title === " ") {
      return null;
    }
    setBook([...book, { bookId, title }]);
  };

  const editBook = (id, newTitle) => {
    const updatedBook = book.map((book) => {
      if (book.bookId === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBook(updatedBook);
    console.log(book);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Book List</h1>
      <div className="card-container">
        <BookList
          deleteBook={deleteBook}
          createBook={book}
          editBook={editBook}
        />
        <CreateBook create={create} />
      </div>
    </>
  );
}

export default App;
