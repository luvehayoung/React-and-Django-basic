import React, { Component } from 'react';
import LoadBtn from "./LoadBtn";
import SaveBtn from "./SaveBtn";
import "./Status.css";
import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../../actions';

class Status extends Component {
    state = {  }
    render() { 
        const data = this.props.dataList[this.props.dataListIndex];        
        return ( 
            <header>
                <div className = "current_value"> 
                    {data.id}
                    {data.data}
                    {data.value}
                </div>

                <div className = "controller">
                    <LoadBtn 
                        API_BASE={this.props.API_BASE} 
                        ImgLoad = {this.props.handleImgLoad} >
                    </LoadBtn>
                    <SaveBtn 
                        API_BASE={this.props.API_BASE}
                        data = {data} 
                        ImgIncrease = {this.props.handleImgHandle}>
                    </SaveBtn>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataList: state.status.dataList,
        dataListIndex: state.status.dataListIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleImgLoad: (dataList, dataListIndex) => {
            dispatch(actions.img_load(dataList, dataListIndex))
        }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Status);