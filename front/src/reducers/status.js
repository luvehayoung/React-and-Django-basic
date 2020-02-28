import * as types from "../actions/ActionTypes";

const initialState = {
    // img_name: "",
    // data: {
    //     id: 0, 
    //     data: 0,
    //     value: 0,
    // },
    dataList: [
        {
            id: 0,
            data: 0,
            value: 0,
            value1: "", 
            value2: "",
            value3: "",
        }
    ],
    dataListIndex: 0,
    // radio
    value1_val: ["type1", "type2", "type3"],
    // text
    // click
    value3_val: ["type1", "type2", "type3", "type4"], 
}

export default function status(state = initialState, action){
    switch(action.type){
        //load
        case types.IMG_LOAD:
            return {
                ...state,
                dataList: action.dataList,
                dataListIndex: action.dataListIndex
            };
        case types.IMG_HANDLE:
            return {
                ...state,
                // data: { ...state.data, value: state.data.value + 1}
                dataList: state.dataList.map((data, index) => 
                    index === state.dataListIndex ? { ...data, value: data.value + 1} : data    
                )
            };  
        case types.INPUT_VALUE1:
            return {
                ...state,
                // data: { ...state.data, value: state.data.value + 1}
                dataList: state.dataList.map((data, index) => 
                    index === state.dataListIndex ? { ...data, value1: action.value} : data    
                )
            };    
        case types.INPUT_VALUE2:
            return {
                ...state,
                // data: { ...state.data, value: state.data.value + 1}
                dataList: state.dataList.map((data, index) => 
                    index === state.dataListIndex ? { ...data, value2: action.value} : data    
                )
            };
        case types.INPUT_VALUE3:
            return {
                ...state,
                // data: { ...state.data, value: state.data.value + 1}
                dataList: state.dataList.map((data, index) => 
                    index === state.dataListIndex ? { ...data, value3: action.value} : data    
                )
            };        
        case types.IMG_NEXT:
            return {
                ...state,
                dataListIndex: state.dataListIndex + action.index
            };
        case types.IMG_PREV:
            return {
                ...state,
                dataListIndex: state.dataListIndex - action.index
            }
        default:
            return state;
    }
};