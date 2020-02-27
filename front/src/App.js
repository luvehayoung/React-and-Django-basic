// App.js
import React, { Component } from 'react';
import axios from "axios";

const API_BASE =  'http://localhost:8000';

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
      
      <div>
        hello
        {this.state.data.map(item => (
          <div key={item.data}>{item.data}</div>
        ))}
      </div>
    );
  }
}

export default App;