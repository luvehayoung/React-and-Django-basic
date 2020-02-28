import React, { Component } from 'react';
import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../../actions';

class Menu extends Component {
    
    state = {  }
    
    handleChange = (value) => {
        console.log(value);
        this.props.handleInputValue1(value);
    }
    render() { 
        const data = this.props.dataList[this.props.dataListIndex];
        const value1 = this.props.value1_val;
        const value3 = this.props.value3_val;

        return ( 
            <aside>
                {data.value} <button onClick = {this.props.handleImgHandle}>increase</button>

                {/* radio button */}
                <div>
                    value1
                    {value1.map((item, index)=> (
                        <p key={index}>
                            <input 
                                type="radio" 
                                id={item} 
                                name="value1" 
                                value={item}
                                onChange={e => this.handleChange(e.target.value)} 
                            />
                            <label htmlFor={item}>{item}</label>
                        </p>
                    ))}
                </div>

                {/* text button */}
                <div>
                    value2
                </div>

                {/* click */}
                <div>
                    value3
                </div>
            </aside>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataList: state.status.dataList,
        dataListIndex: state.status.dataListIndex, 
        value1_val: state.status.value1_val,
        value3_val: state.status.value3_val,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleImgHandle: () => {
            dispatch(actions.img_handle())
        },
        handleInputValue1: (value) => {
            dispatch(actions.input_value1(value))
        },
        handleInputValue2: (value) => {
            dispatch(actions.input_value2(value))
        },
        handleInputValue3: (value) => {
            dispatch(actions.input_value3(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);