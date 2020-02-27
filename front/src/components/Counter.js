import React, { Component } from 'react';
import Value from  "./Value";
import Control from  "./Control";
import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../actions';
// smart component

class Counter extends Component {
    state = {  }

    setRandomColor = () => {
        console.log("h");
        const color = [
            Math.floor((Math.random()*55)+200),
            Math.floor((Math.random()*55)+200),
            Math.floor((Math.random()*55)+200)
        ];
        this.props.handlerSetColor(color);
        console.log(this.props.color);
    }

    render() { 
        const color = this.props.color;

        return ( 
            <div
                style = {{
                    backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                }}
            >
                REDUX
                <Value number = {this.props.number}></Value>
                <Control
                    onPlus = {this.props.handleIncrement}
                    onSubtract = {this.props.handlerDecrement}
                    onRandomizeColor = {this.setRandomColor}
                ></Control>
            </div>
        );
    }
}

// Counter.defaultProps = defaultProps;
const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => {
            dispatch(actions.increment())
        },
        handlerDecrement: () => {
            dispatch(actions.decrement())
        },
        handlerSetColor: (color) =>{
            dispatch(actions.set_color(color))
        }
    }
    // automatic
    // return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);