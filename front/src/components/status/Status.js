import React, { Component } from 'react';
import LoadBtn from "./LoadBtn";
import SaveBtn from "./SaveBtn";
import ConfiBtn from "./ConfiBtn";
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
                    <p className="pages">{(this.props.dataListIndex + 1) + "/" + this.props.dataList.length}</p>
                    
                    {        
                        data.data !== 0 ? 
                        <p className="title">{data.data.split('/')[data.data.split('/').length-1]}</p>
                        :
                        <p className="title"></p>
                    }
                    
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
                    <ConfiBtn
                        API_BASE={this.props.API_BASE}
                        ConfiSet = {this.props.handleConfiguration}
                        ConfiInfo = {this.props.configuration} 
                    ></ConfiBtn>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataList: state.status.dataList,
        dataListIndex: state.status.dataListIndex, 
        configuration: state.status.configuration,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleImgLoad: (dataList, dataListIndex) => {
            dispatch(actions.img_load(dataList, dataListIndex))
        }, 
        handleConfiguration: (configuration) => {
            dispatch(actions.configuration(configuration))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Status);