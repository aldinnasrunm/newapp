import logo from './logo.svg';
import './App.css';
import {addTwo, addThree} from './addTwo.js';

function App() {
  // addThree(1,2,3);
  // addTwo(1,2);
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
          {addThree(1,2,3)}
          {addTwo(1,2)}

        </a>
      </header>
    </div>
  );
}

export default App;
