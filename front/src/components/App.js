// App.js
import React, { Component } from 'react';
import Status from "./status/Status";
import ImgBoard from "./board/ImgBoard";
import Menu from "./menu/Menu";
import "./App.css";
// import axios from "axios";

require("dotenv").config()
const API_BASE = process.env.REACT_APP_API_BASE; 

class App extends Component {
 
  state = {
    data: [],  
  };

  render() {
    return (    
      <React.Fragment>
        <Status API_BASE = {API_BASE}></Status>
        
        <div
          style = {{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 15

          }}
        >
          <ImgBoard></ImgBoard>
          <Menu API_BASE = {API_BASE}></Menu>
        </div>
      </React.Fragment>
    );
  }
}

export default App;