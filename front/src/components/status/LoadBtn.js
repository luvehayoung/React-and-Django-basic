import React, { Component } from 'react';
import axios from "axios";


class LoadBtn extends Component {
    constructor(props){
        super(props);
        this.imgload = this.imgload.bind(this);
    }
    state = { 
        size: 10
     }

    async imgload() {
        // -1: load list
        let size = this.state.size;
        let url = this.props.API_BASE + "/api/-1/" + size;
        axios
        .get(url, {
            headers: {
            "content-type": "application/json"
            }
        })
        .then(res => {
        //    console.log(res.data); 
           this.props.ImgLoad(res.data, 0);
        })
        .catch(err => console.log(err));

    }

    getLoadSize = (value) =>{
        this.setState({
            size: value
        })
    }

    render() { 
        return (
            <div>
                <input onChange = {e => this.getLoadSize(e.target.value)} value = {this.state.size}></input> 
                <button onClick={this.imgload}>
                    Load
                </button>
            </div>
         );
    }
}
 
export default LoadBtn;