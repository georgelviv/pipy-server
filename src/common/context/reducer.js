import { layoutReducer } from './layoutContext';

const combineReducers = (reducersObj) => {
  const reducerKeys = Object.keys(reducersObj);

  return function combination(state = {}, action) {
    const nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      nextState[key] = reducersObj[key](state[key], action);
    }
    return nextState;
  }
};

const reducer = combineReducers({
  layout: layoutReducer
});

export { reducer };