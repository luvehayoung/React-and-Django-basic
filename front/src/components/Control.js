import React, { Component } from 'react';
// dumb component

const createWarning = (func_name) => {
    console.log(`${func_name} is not ready`);
};

class Control extends Component {
    
    // constructor(props){
    //     super(props);
    // }

    static defaultProps = {
        onPlus: createWarning("On Plus"),
        onSubtract: createWarning("On Subtract"),
        onRandomizeColor: createWarning("On RandomizeColor"),
    }

    state = {  }

    render() { 
        return ( 
            <div>
                <button onClick = {this.props.onPlus}>+</button>
                <button onClick = {this.props.onSubtract}>-</button>
                <button onClick = {this.props.onRandomizeColor}>Random BG</button>
            </div>
         );
    }
}
 
export default Control;