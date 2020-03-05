import React, { Component } from 'react';

class PaletteMenu extends Component {
    state = {  }
    getStyle = (item) => {
        if(item === this.props.default){
            return {width: "140px", height: "30px",backgroundColor:"grey"}
        }else{
            return {width: "150px", height: "30px"}
        }
    }
    render() { 
        return ( 
            <div className="PaletteMenu">
                <div className="menuTitle">{this.props.title}</div>
                <ul>
                    {this.props.value.map((item, index) => (
                        <li key={index} 
                        onClick={() => this.props.handleChange(this.props.index, item)}
                        style = {this.getStyle(item)}
                        >{item}</li>
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default PaletteMenu;