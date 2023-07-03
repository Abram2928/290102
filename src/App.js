import logo from './logo.svg';
import './App.css';

function App() {
  const nilai = 5
  let hasil;
  if (nilai < 10) {
    hasil = "jelek"
  } else {
    hasil = "bagus"
  }
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
          Learn React = aboiiiii
        </a>
        <h1>{hasil}</h1>
        <h2>TESSS</h2>
        <h3>Apa aja</h3>
        coba coba
      </header>
     
    </div>
  );
}

export default App;
