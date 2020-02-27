// App.js
import React, { Component } from 'react';
import axios from "axios";
import Counter from "./Counter.js";

require("dotenv").config()
const API_BASE = process.env.REACT_APP_API_BASE; 

class App extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  state = {
    data: []
  };

  async componentDidMount() {
    
    let url = API_BASE;
  
    axios
      .get(url, {
        headers: {
          "content-type": "application/json"
        }
      })
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
    
  }

  render() {
    return (    
      <React.Fragment>
        hello, hi
        {this.state.data.map(item => (
          <div key={item.data}>{item.data}</div>
        ))}
        <Counter></Counter>
      </React.Fragment>
    );
  }
}

export default App;