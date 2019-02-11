import actionTypes from "../constant/actionTypes";

const initialState = {
    currentTaskId:0,
    currentTask:{},
    alltasks:[]
}

export default function taskReducer(state =  initialState, action){
    const newState = JSON.parse(JSON.stringify(state));

    if (action.type === actionTypes.GET_TASK) {
        newState.currentTask = action.task;
    }

    if (action.type === actionTypes.LOAD_TASKS) {
        newState.alltasks =  action.alltasks; 
    }
    return newState;
}