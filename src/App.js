import logo from "./logo.svg";
import "./App.css";
import gambar from "./assets/images/1.jpg"
import Thumbnail from "./assets/images/ppo.mp4"



function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
    </div>
  );
}

function App() {
  const nilai = 5;
  let hasil;
  if (nilai < 10) {
    hasil = "jelek";
  } else {
    hasil = "bagus";
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
          href="https://smansarejanglebong.sch.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for information
        </a>

        <h1>{hasil}</h1>
        *Keterangan: Hasil akan Bagus bila nilai diatas 5 
      </header>

      
      
      <img src={gambar} alt=""/>
    </div>
    
    

  );
}

export default App;
