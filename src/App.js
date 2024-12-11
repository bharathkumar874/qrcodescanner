// import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { Html5QrcodeScanner } from "html5-qrcode";

function App() {
  const [scanner, setScanner] = useState(null);
  useEffect(() => {
    if (!scanner) {
      const qrCodeScanner = new Html5QrcodeScanner(
        "qr-reader",
        {
          fps: 10,
          qrbox: 250,
        },
        false
      );

      qrCodeScanner.render(
        (decodedText) => {
          alert(`QR Code Scanned: ${decodedText}`);
          qrCodeScanner.clear();
        },
        (error) => {
          //console.error(`QR Code Scan Error: ${error}`);
        }
      );

      setScanner(qrCodeScanner);
    }

    return () => {
      if (scanner) {
        scanner.clear();
      }
    };
  }, [scanner]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Live QR Code Scanner</h1>
      <div id="qr-reader" style={{ width: "500px", margin: "auto" }}></div>
    </div>
  );
}

export default App;
/*
function App() {
  const [data, setData] = useState("No result");

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.error("MediaDevices API is not supported in this browser.");
    alert("Your browser does not support camera access for QR code scanning.");
  }

  return (
    
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>QR Code Scanner</h1>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>Scanned Data: {data}</p>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;*/
