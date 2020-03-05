import React, { Component } from 'react';
import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../../actions';
import Controller from './Controller';
import './ImgBoard.css';

class ImgBoard extends Component {

    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    state = { 
        zoom: 1,
        originalWidth: 0,
    }

    async componentDidMount() {     
        this.updateCanvas(this.state.zoom);
    }

    async componentDidUpdate(prevProps, prevState){
        if(this.props.gridSize !== prevProps.gridSize){
            this.updateCanvas(this.state.zoom);
        }
        
    }

    updateCanvas = (zoom) => {
        const canvas = this.refs.canvas;
        const ctx = this.refs.canvas.getContext('2d');
  
        let w = this.props.gridSize*zoom;
        let h=  this.props.gridSize*zoom;
        let bw = canvas.clientWidth;
        let bh = canvas.clientHeight;

        ctx.clearRect(0, 0, bw, bh);

        ctx.beginPath();
  
        // console.log(bw, bh);
        for (let x = 0; x <= bw; x += w) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, bh);
        }
  
        for (let x = 0; x <= bh; x += h) {
            ctx.moveTo(0, x);
            ctx.lineTo(bw, x);
        }
        ctx.strokeStyle = "rgba(0,0,0,0.4)";
        ctx.stroke();       
    }

    zoomController = event => {
        let size = 0.01;
        let zoom = 0;
        if (event.nativeEvent.wheelDelta > 0) {
          // console.log("Up");
          zoom = this.state.zoom + size
          this.setState({
            zoom: zoom
          });
          this.updateCanvas(zoom);
        } else if (event.nativeEvent.wheelDelta < 0) {
          // console.log("Down");
          zoom = this.state.zoom - size
          this.setState({
            zoom: zoom,
          });
          this.updateCanvas(zoom);
        }
      };

      
    imgzoomController = () => {
        let wid = this.state.originalWidth * this.state.zoom
        return wid;
    }
    imgEl = React.createRef();
    boardEl = React.createRef();
    render() { 
        const data = this.props.dataList[this.props.dataListIndex];        
        return ( 
            <main>
                <div className = "img_view" 
                onWheel={event => this.zoomController(event)}
                ref={el => this.boardEl = el}
                >
                   <canvas 
                        ref="canvas" 
                        id="canvas" 
                        width={1000} height={1000}
                        style={{ zIndex: 1, pointerEvents: "none", position:"absolute"}} 
                    ></canvas>
                    {data.data !== 0 ?
                        
                        <img 
                            src = {data.data} 
                            alt = {data.value} 
                            ref={el => this.imgEl = el}
                            width={this.state.originalWidth * this.state.zoom}
                            // style ={{  }}
                            onLoad ={() => {
                                let widthBoard = this.boardEl.clientWidth;
                                let heightBoard = this.boardEl.clientHeight;
                                // console.log(widthBoard, heightBoard);
                                let imgWidth = this.imgEl.naturalWidth;
                                let imgHeight = this.imgEl.naturalHeight;
                                let width_zoom = widthBoard/imgWidth;
                                let height_zoom = heightBoard/imgHeight; 
                                // console.log(width_zoom, height_zoom);
                                
                                let zoom = 0;
                                if(imgWidth > widthBoard){
                                    console.log(width_zoom);
                                    if(imgHeight > heightBoard){
                                        zoom = height_zoom;
                                        this.setState({
                                            zoom: zoom
                                        })
                                    }else{
                                        zoom = width_zoom;
                                        this.setState({
                                            zoom: zoom    
                                        });
                                    }
                                }else{
                                    zoom = 1.0
                                    this.setState({
                                        zoom: zoom
                                    });
                                }

                                this.setState({
                                    originalWidth: this.imgEl.naturalWidth,
                                })
                                this.updateCanvas(zoom);

                            }}
                            draggable="false"
                            ></img>
                        : 
                        <span style ={{ position:"absolute", display: "block", width: "100px", left: "calc(45%)", top: "calc(45%)"}}>No Image</span>
                    }
                </div>
                <Controller 
                    CurrIndex = {this.props.dataListIndex}
                    CurrLength = {this.props.dataList.length}
                    ImgNext = {this.props.handleImgNext} 
                    ImgPrev = {this.props.handleImgPrev}
                    GridSize = {this.props.handleGridSize}  
                    >  
                </Controller>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.status.data,
        dataList: state.status.dataList,
        dataListIndex: state.status.dataListIndex,
        gridSize: state.status.gridSize
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
        handleGridSize: (size) => {
            dispatch(actions.grid_size(size))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgBoard);