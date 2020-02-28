import React, { Component } from 'react';
import axios from "axios";


class LoadBtn extends Component {
    constructor(props){
        super(props);
        this.imgload = this.imgload.bind(this);
    }
    state = {  }

    async imgload() {
        let url = this.props.API_BASE;
        axios
        .get(url, {
            headers: {
            "content-type": "application/json"
            }
        })
        .then(res => {
           console.log(res.data); 
           this.props.ImgLoad(res.data, 0);
        })
        .catch(err => console.log(err));

    }
    render() { 
        return ( 
            <button onClick={this.imgload}>
                Load
            </button>
         );
    }
}
 
export default LoadBtn;