import * as types from './ActionTypes';

// counter
export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function set_color(color){
    return {
        type: types.SET_COLOR,
        color //color:color
    };
}

// status
export function img_load(dataList, dataListIndex){
    return {
        type: types.IMG_LOAD,
        dataList,
        dataListIndex
    }
}

// configuration
export function configuration(configuration){
    return {
        type: types.CONFIGURATION,
        configuration
    }
}

// img board
export function img_next(index){
    return {
        type: types.IMG_NEXT,
        index
    }
}

export function img_prev(index){
    return {
        type: types.IMG_PREV,
        index
    }
}


export function grid_size(size){
    return {
        type: types.GRID_SIZE,
        size
    }
}

// menu
export function input_value(value){
    return {
        type: types.INPUT_VALUE,
        value
    }
}

export function input_value1(value){
    return {
        type: types.INPUT_VALUE1,
        value
    }
}

export function input_value2(value){
    return {
        type: types.INPUT_VALUE2,
        value
    }
}

export function input_value3(value){
    return {
        type: types.INPUT_VALUE3,
        value
    }
}