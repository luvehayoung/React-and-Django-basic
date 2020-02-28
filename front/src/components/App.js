// App.js
import React, { Component } from 'react';
import Status from "./status/Status";
import ImgBoard from "./board/ImgBoard";
import Menu from "./menu/Menu";

require("dotenv").config()
const API_BASE = process.env.REACT_APP_API_BASE; 

class App extends Component {
  constructor() {
    super();
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  state = {
    data: []
  };

  render() {
    return (    
      <React.Fragment>
        <Status API_BASE = {API_BASE}></Status>
        <div
          style = {{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <ImgBoard></ImgBoard>
          <Menu></Menu>
        </div>
      </React.Fragment>
    );
  }
}

export default App;