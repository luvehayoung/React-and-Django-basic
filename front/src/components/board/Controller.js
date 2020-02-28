import React, { Component } from 'react';

class Controller extends Component {

    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    state = {  }

    componentDidMount() {
        document.addEventListener("keydown", this.key_imgController);
    }

    imgController = (index) => {
        let curr_index = this.props.CurrIndex;
        let curr_length = this.props.CurrLength;

        if(index === 1 && curr_index < curr_length - 1 ){
            this.props.ImgNext(1);
        }else if(index === 10 && curr_index < curr_length - 10){
            this.props.ImgNext(10);
        }else if(index === -1 && curr_index > 0){
            this.props.ImgPrev(1);
        }else if(index === -10 && curr_index > 9){
            this.props.ImgPrev(10);
        }
    }

    key_imgController = (e) => {
        if (e.target.type !== 'text' && e.keyCode === 68) {
            this.imgController(-1);
        } else if (e.target.type !== 'text' && e.keyCode === 70) {
            this.imgController(1);
        } else if (e.target.type !== 'text' && e.keyCode === 67 && !e.ctrlKey) {
            this.imgController(-10);
        } else if (e.target.type !== 'text' && e.keyCode === 86 && !e.ctrlKey) {
            this.imgController(10);
        }
    }

    render() {                
        return ( 
            <div>
                <button onClick = {() => this.imgController(-10)}>-10</button>
                <button onClick = {() => this.imgController(-1)}>-1</button>
                <button onClick = {() => this.imgController(1)}>1</button>
                <button onClick = {() => this.imgController(10)}>10</button>
            </div>
        );
    }
}

export default Controller;