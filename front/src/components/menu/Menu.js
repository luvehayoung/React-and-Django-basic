import React, { Component } from 'react';
import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../../actions';
import RadioMenu from "./RadioMenu";
import TextMenu from "./TextMenu";
import PaletteMenu from "./PaletteMenu";
import axios from "axios";
import "./Menu.css";

class Menu extends Component {
    constructor(props){
        super(props);
        this.img_get_object = this.img_get_object.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }
    state = {  }
  
    async img_get_object(){
        let pk = this.props.dataList[this.props.dataListIndex]["id"];
        // console.log(pk);
        let url = this.props.API_BASE + "/api/" + pk + "/" + "-1";
        // let url = this.props.API_BASE + "/api/1";

        axios
        .get(url, {
            headers: {
            "content-type": "application/json"
            }
        })
        .then(res => {
            // console.log("each", res.data.value);
            // console.log("ee", res.data.value1);
            this.props.handleInputValue(res.data.value);
            this.props.handleInputValue1(res.data.value1);
            this.props.handleInputValue2(res.data.value2);
            this.props.handleInputValue3(res.data.value3);
        })
        .catch(err => console.log(err));

    }

    async componentDidUpdate(prevProps, prevState){
        if(this.props.dataListIndex !== prevProps.dataListIndex || this.props.dataList.length !== prevProps.dataList.length)
            this.img_get_object();
    }  
    
    handleChange = (type, value) => {
        if(type === 0){
            // console.log("dd", 0, value);
            this.props.handleInputValue(value);
        }else if(type === 1){
            // console.log(1, value);
            this.props.handleInputValue1(value);
        }else if(type === 2){
            // console.log(2, value);
            this.props.handleInputValue2(value);
        }else if(type === 3){
            // console.log(3, value);
            this.props.handleInputValue3(value);
        }
    }

    menuComponent = (type, index, value, de, title) => {
        // console.log(type, index, de);
        if(type === "radio"){
            return <RadioMenu index={index} value = {value} handleChange = {this.handleChange} default = {de} title={title}></RadioMenu>;
        }else if(type === "text"){
            return <TextMenu index={index} handleChange = {this.handleChange} default = {de} title={title}></TextMenu>;
        }else if(type === "palette"){
            return <PaletteMenu index={index} value = {value} handleChange = {this.handleChange} default = {de} title={title}></PaletteMenu>;
        }
    }

    render() { 
        const confiLoaded = this.props.configuration.loaded;
        const configuration = this.props.configuration;
        const data = this.props.dataList[this.props.dataListIndex];
        const value = this.props.value_val;
        const value1 = this.props.value1_val;
        const value2 = this.props.value2_val;
        const value3 = this.props.value3_val;

        return ( 
            <aside className="menu">
                
                {confiLoaded ? 
                    <React.Fragment>
                        {this.menuComponent(configuration["value"], 0, value, data["value"], "value")}
                        {this.menuComponent(configuration["value1"], 1, value1, data["value1"], "value1")}
                        {this.menuComponent(configuration["value2"], 2, value2, data["value2"], "value2")}
                        {this.menuComponent(configuration["value3"], 3, value3, data["value3"], "value3")}
                        {/* radio button */}
                        {/* <RadioMenu index={1} value = {value1} handleChange = {this.handleChange} default = {data["value1"]}></RadioMenu> */}
                        {/* <TextMenu index={1} handleChange = {this.handleChange} default = {data["value1"]}></TextMenu> */}
                        {/* <PaletteMenu index={1} value = {value1} handleChange = {this.handleChange} default = {data["value1"]}></PaletteMenu> */}

                        {/* text button */}
                        {/* <TextMenu index={2} handleChange = {this.handleChange} default = {data["value2"]}></TextMenu> */}

                        {/* click */}
                        {/* <PaletteMenu index={3} value = {value3} handleChange = {this.handleChange} default = {data["value3"]}></PaletteMenu> */}
                        {/* <RadioMenu index={3} value = {value3} handleChange = {this.handleChange} default = {data["value3"]}></RadioMenu> */}
                    </React.Fragment> 
                    : 
                    <div>Please set Configuration</div>
                }
            </aside>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataList: state.status.dataList,
        dataListIndex: state.status.dataListIndex, 
        configuration: state.status.configuration,
        value_val: state.status.configuration["value_val"],
        value1_val: state.status.configuration["value1_val"],
        value2_val: state.status.configuration["value2_val"],
        value3_val: state.status.configuration["value3_val"],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputValue: (value) => {
            dispatch(actions.input_value(value))
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