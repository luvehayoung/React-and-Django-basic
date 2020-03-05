import React, { Component } from 'react';

class RadioMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="radioMenu">
                    <div className="menuTitle">{this.props.title}</div>
                    {this.props.value.map((item, index)=> (
                        <p key={index}>
                            <input 
                                type="radio" 
                                id={this.props.title + item} 
                                name={this.props.index}
                                value={item}
                                onChange={e => this.props.handleChange(this.props.index, e.target.value)}
                                checked = {this.props.default === item? true: false}
                            />
                            <label htmlFor={this.props.title + item} >{item}</label>
                        </p>
                    ))}
                </div>

         );
    }
}
 
export default RadioMenu;

