import { reducer } from './reducer';


const dispatch = (prevState) => {
  prevState.store = reducer(prevState, event);
  return prevState;
};

export { dispatch };