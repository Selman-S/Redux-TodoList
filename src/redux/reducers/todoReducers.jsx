import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../types/todoTypes';

const initialState = {
  todoList: [

  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case DELETE_TODO: 
  
      return { ...state, ...payload };
    case TOGGLE_TODO:
    console.log(payload)
    console.log(state.todoList)
    const newPayload = state.todoList.filter((item)=>item.id===payload.id).map((item)=>item.completed? item.completed=false : item.completed=true)
    console.log(newPayload)
      return  {   
        todoList:[
          ...state.todoList,         ] };
    case CLEAR_TODO:
      return initialState;
    default:
      return state;
  }
};
export default todoReducer;
