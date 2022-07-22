

import { createStore, combineReducers } from 'redux';

import todoReducer from './reducers/todoReducers';

const rootReducer = combineReducers({

  todoRed: todoReducer,
});

export const getStore = () => {
  const store = createStore(rootReducer);
  return store;
};
