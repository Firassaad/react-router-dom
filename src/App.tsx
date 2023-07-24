import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ListGroup from "./Components/ListGroup";
import { Link } from "react-router-dom";
import Books from "./Components/Books";
import Book from "./Components/Book";
import MyForm from "./Components/MyForm";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list">
              ListGroup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/books">
              ListBook
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListGroup />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>

      <MyForm />
    </>
  );
}

export default App;
