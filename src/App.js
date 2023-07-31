import logo from './logo.svg';
import './App.css';

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
*/
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

/*
function App() {
  return (
    <div className="split-window">
      <header className="header">
        <h1>BookViewer</h1>
      </header>
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
export default App;
