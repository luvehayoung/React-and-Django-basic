import React, { Component } from 'react';
import axios from "axios";


class ConfiBtn extends Component {
    constructor(props){
        super(props);
        this.Confiset = this.Confiset.bind(this);
    }
    state = { 
        size: 10, 
        popup: false,
        columns: [],

        values: {
            value: "",
            value1: "",
            value2: "",
            value3: "",
        },

        classes: {
            class: [],
            class1: [],
            class2: [],
            class3: [],
        }
    }

    async Confiset() {
        let url = this.props.API_BASE + "/api/col";
    
        axios
        .get(url, {
            headers: {
            "content-type": "application/json"
            }
        })
        .then(res => {
            this.setState({
                popup: true,
                columns: res.data["columns"]
            });

        })
        .catch(err => console.log(err));
    }

    cancel = () => {
        this.setState({
            popup: false
        });

        this.props.ConfiSet({
            loaded: false,
            value: "",
            value1: "",
            value2: "",
            value3: "",
            value_val: [],
            value1_val: [],
            value2_val: [],
            value3_val: [],
        })
    }
    set = () => {
        
        this.props.ConfiSet(
            {
                loaded: true, 
                value: this.state.values.value,
                value1: this.state.values.value1,
                value2: this.state.values.value2,
                value3: this.state.values.value3,
                value_val: this.state.classes.class,
                value1_val: this.state.classes.class1,
                value2_val: this.state.classes.class2,
                value3_val: this.state.classes.class3,
            }
        )
        this.setState({
            popup: false
        })

    }

    change = (type, e) => {
        if(type === "value"){
            this.setState({
                values: {
                    ...this.state.values, value: e.target.value 
                }
            })
        }else if(type === "value1"){
            this.setState({
                values: {
                    ...this.state.values, value1: e.target.value 
                }
            })
        }else if(type === "value2"){
            this.setState({
                values: {
                    ...this.state.values, value2: e.target.value 
                }
            })
        }else if(type === "value3"){
            this.setState({
                values: {
                    ...this.state.values, value3: e.target.value 
                }
            })
        }
    
    }

    classchange = (type, e) => {
        if(type === "class"){
            this.setState({
                classes: {
                    ...this.state.classes, class: e.target.value.split(",") 
                }
            })
        }else if(type === "class1"){
            this.setState({
                classes: {
                    ...this.state.classes, class1: e.target.value.split(",") 
                }
            })
        }else if(type === "class2"){
            this.setState({
                classes: {
                    ...this.state.classes, class2: e.target.value.split(",") 
                }
            })
        }else if(type === "class3"){
            this.setState({
                classes: {
                    ...this.state.classes, class3: e.target.value.split(",") 
                }
            })
        }
    
    }
    render() { 
        return (
            <React.Fragment>
                <button onClick={this.Confiset}>
                    ConfiBtn
                </button>
                {this.state.popup &&
                    
                    <div style = {{ 
                            zIndex: 10, 
                            position: "absolute", 
                            width: 400, 
                            top: "15%", 
                            backgroundColor: "white", 
                            border: "1px solid black",
                            padding: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        className = "confiLi"
                        >
                            <h3 style = {{textAlign: "center"}}>Configuration</h3>
                            <ul>
                                <li>
                                    <p>{this.state.columns[0]}</p>
                                </li>
                                <li>
                                    <p>{this.state.columns[1]}</p>
                                </li>
                                <li>
                                    <p>{this.state.columns[2]}</p>
                                    <select id="value" name="value" onChange={(e) => this.change("value", e)}>
                                        <option value="">none</option>
                                        <option value="radio">radio</option>
                                        <option value="text">text</option>
                                        <option value="palette">palette</option>
                                    </select>
                                    
                                </li>
                                {(this.state.values.value === "radio" || this.state.values.value === "palette")
                                        &&
                                      <li className="classfication">
                                          <label htmlFor={"class"}>value 항목</label>
                                          <input id={"class"} onChange={(e)=> this.classchange("class", e)}></input>
                                      </li>  
                                    }
                                <li>
                                    <p>{this.state.columns[3]}</p>
                                    <select id="value1" name="value1" onChange={(e) => this.change("value1", e)}>
                                        <option value="">none</option>
                                        <option value="radio">radio</option>
                                        <option value="text">text</option>
                                        <option value="palette">palette</option>
                                    </select>
                                </li>
                                {(this.state.values.value1 === "radio" || this.state.values.value1 === "palette")
                                        &&
                                      <li className="classfication"> 
                                          <label htmlFor={"class1"}>value1 항목</label>
                                          <input id={"class1"} onChange={(e)=> this.classchange("class1", e)}></input>
                                      </li>  
                                    }
                                <li>
                                    <p>{this.state.columns[4]}</p>
                                    <select id="value2" name="value2" onChange={(e) => this.change("value2", e)}>
                                        <option value="">none</option>
                                        <option value="radio">radio</option>
                                        <option value="text">text</option>
                                        <option value="palette">palette</option>
                                    </select>
                                </li>
                                {(this.state.values.value2 === "radio" || this.state.values.value2 === "palette")
                                        &&
                                      <li className="classfication">
                                          <label htmlFor={"class2"}>value2 항목</label>
                                          <input id={"class2"} onChange={(e)=> this.classchange("class2", e)}></input>
                                      </li>  
                                    }
                                <li>
                                    <p>{this.state.columns[5]}</p>
                                    <select id="value3" name="value3" onChange={(e) => this.change("value3", e)}>
                                        <option value="">none</option>
                                        <option value="radio">radio</option>
                                        <option value="text">text</option>
                                        <option value="palette">palette</option>
                                    </select>    
                                </li>
                                {(this.state.values.value3 === "radio" || this.state.values.value3 === "palette")
                                        &&
                                      <li className="classfication">
                                          <label htmlFor={"class3"}>value3 항목</label>
                                          <input id={"class3"} onChange={(e)=> this.classchange("class3", e)}></input>
                                      </li>  
                                }
                            </ul>
                        
                            <div>
                                <button onClick={this.cancel}>
                                    cancel
                                </button>

                                <button onClick={this.set} >
                                    set
                                </button>
                            </div>
                    </div>
                }
            </React.Fragment> 
            
         );
    }
}
 
export default ConfiBtn;