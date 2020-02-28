import React, { Component } from 'react';
// dumb component
class Value extends Component {
    // constructor(props){
    //     super(props);
    // };

    static defaultProps = {
        number: -1
    }

    state = {  }

    render() { 
        return ( 
            <div>
                Value
                <p>{this.props.number}</p>
            </div>

         );
    }
}
 
export default Value;