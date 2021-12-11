import logo from './logo.svg';
import './App.css';
import { marked } from 'marked';

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
console.log(clean);
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {html}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with 
        </a>
      </header>
    </div>
  );
}

export default App;
