import logo from "./logo.svg";
import "./App.css";
import gambar from "./assets/images/2.jpg"
import React, { Component } from "react";








function App() {
  const nilai = 5;
  let hasil;
  if (nilai < 10) {
    hasil = "JELEK";
  } else {
    hasil = "BAGUS";
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Klik <code>link</code> dibawah untuk lebih lengkap.
        </p>
        <a
          className="App-link"
          href="https://alexandriaschool.sch.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for information
        </a>
        



Nilai kamu dikategorikan 
        <h1>{hasil}</h1>
        *Keterangan: Hasil akan BAGUS bila nilai diatas 5 

        
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=5ikiX0gv5w4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for tutorial
        </a>
        Klik tautan diatas untuk video tutorial belajar jika nilai anda dikategorikan JELEK
      </header>

      
      
      <img src={gambar} alt=""/>
    </div>
    
    

  );
}



export default App;
