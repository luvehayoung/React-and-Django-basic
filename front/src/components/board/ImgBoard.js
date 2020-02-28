import React, { Component } from 'react';
import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../../actions';
import Controller from './Controller';
import './ImgBoard.css';

class ImgBoard extends Component {
    state = {  }
    render() { 
        const data = this.props.dataList[this.props.dataListIndex];        
        return ( 
            <main>
                <div className = "img_view">
                    {data.data !== 0 ?
                        <img src = {data.data} alt = {data.value}></img>
                        : 
                        <span>No Image</span>
                    }
                </div>
                <Controller 
                    CurrIndex = {this.props.dataListIndex}
                    CurrLength = {this.props.dataList.length}
                    ImgNext = {this.props.handleImgNext} 
                    ImgPrev = {this.props.handleImgPrev}>
                </Controller>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.status.data,
        dataList: state.status.dataList,
        dataListIndex: state.status.dataListIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleImgNext: (index) => {
            dispatch(actions.img_next(index))
        },
        handleImgPrev: (index) => {
            dispatch(actions.img_prev(index))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgBoard);