import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Nav, NavLink, Card } from "react-bootstrap";
/*
import logo from './logo.svg';
import './App.css';
*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="split-window">
      <div className="left-nav">
        <ul>
          <li>Navi 1</li>
          <li>Navi 2</li>
          <li>Navi 3</li>
        </ul>
      </div>
      <div className="right-image">
        <img src="https://placehold.it/1000x500" alt="Image" />
      </div>
    </div>
  );
}
*/
function App() {
  const [books, setBooks] = useState([
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      image: "https://placehold.it/1000x500/000/fff",
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      image: "https://placehold.it/1000x500/00f/fff",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      image: "https://placehold.it/1000x500/f00/fff",
    },
  ]);

  return (
    <div>
      <header className="header">
        <h1>BookViewer</h1>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/authors">Authors</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <section className="books">
          <h2>Books</h2>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <Card>
                  <Card.Img src={book.image} alt={book.title} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author}</Card.Text>
                  </Card.Body>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
