import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editor from './Editor.js'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
         markdown previewer
      </header>
      <div className='container'>
        <div id='main' className='row justify-content-center'>
        <Editor />
      </div>
      </div>
    </div>
  );
}

export default App;
