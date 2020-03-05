import React, { Component } from 'react';
import "./Controller.css";

class Controller extends Component {

    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    state = { 
        GridSize: 128
     }

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

    handleGrid = (e) =>{
        this.setState({
            GridSize: e
        })
    }
    render() {                
        return ( 
            <div className="boardController">
                <button onClick = {() => this.imgController(-10)}>&lt;&lt;</button>
                <button onClick = {() => this.imgController(-1)}>&lt;</button>
                <button onClick = {() => this.imgController(1)}>&gt;</button>
                <button onClick = {() => this.imgController(10)}>&gt;&gt;</button>
                <div>
                    <input type="text" value={this.state.GridSize} onChange = {(e) => this.handleGrid(e.target.value)}></input>
                    <button onClick={() => this.props.GridSize(this.state.GridSize)}>Grid</button>
                </div>
            </div>
        );
    }
}

export default Controller;