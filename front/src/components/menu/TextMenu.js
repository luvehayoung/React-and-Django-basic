import React, { Component } from 'react';
import "./TextMenu.css";

class TextMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="textMenu">
                <label htmlFor={"text"}>{this.props.title}</label>
                <input
                    type="text"
                    id={"text"}
                    onChange={e => this.props.handleChange(this.props.index, e.target.value)}
                    className="right-menu-group-input"
                    value={this.props.default!==null? this.props.default: ""}
                ></input>
            </div>
         );
    }
}
 
export default TextMenu;