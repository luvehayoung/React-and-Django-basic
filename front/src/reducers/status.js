import * as types from "../actions/ActionTypes";

const initialState = {
    // img_name: "",
    // data: {
    //     id: 0, 
    //     data: 0,
    //     value: 0,
    // },
    configuration:
    {
        loaded: false,
        value: "",
        value1: "",
        value2: "",
        value3: "",
        value_val: [],
        value1_val: [],
        value2_val: [],
        value3_val: [],
        // id: 0, // pk
        // image_name: 0, // image name
        // radio_type: 0,  //radio type
        // text_type: 0,   // text type
        // palette_type: 0,    //palette type
    },

    // value1_val: ["type1", "type2", "type3"],
    // value3_val: ["type1", "type2", "type3", "type4"], 

    dataList: [
        {
            id: 0,
            data: 0,
            value: "",
            value1: "", 
            value2: "",
            value3: "",
        }
    ],

    dataListIndex: 0,
    // radio
   

    gridSize:128,
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
        case types.INPUT_VALUE:
            return {
                ...state,
                // data: { ...state.data, value: state.data.value + 1}
                dataList: state.dataList.map((data, index) => 
                    index === state.dataListIndex ? { ...data, value: action.value} : data    
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
        case types.GRID_SIZE:
            return {
                ...state,
                gridSize: action.size
            }
        case types.CONFIGURATION:
            return {
                ...state,
                configuration: action.configuration
            }
        default:
            return state;
    }
};