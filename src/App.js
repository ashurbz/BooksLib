import { useState } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";

function App() {
  const [book, setBook] = useState([]);

  const bookId = Math.trunc(Math.random() * 9999);

  const create = (title) => {
    if (title === " ") {
      return null;
    }
    setBook([...book, { bookId, title }]);
  };

  console.log(book);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Book List</h1>
      <div className="card-container">
        <BookList createBook={book} />
        <CreateBook create={create} />
      </div>
    </>
  );
}

export default App;
