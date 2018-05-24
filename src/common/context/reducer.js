import { layoutReducer } from './layoutContext';
import { iotDataReducer } from './iotDataContext';

const combineReducers = (reducersObj) => {
  const reducerKeys = Object.keys(reducersObj);

  return function combination(state = {}, action) {
    const nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      nextState[key] = reducersObj[key](state[key], action);
    }
    if (typeof windows !== 'undefined') windows.store = nextState;
    return nextState;
  }
};

const reducer = combineReducers({
  layout: layoutReducer,
  iotData: iotDataReducer
});

export { reducer };