import { LAYOUT_NAVBAR_TOGGLE_ACTION } from './layoutActions';

const layoutStore = {
  isNavbarOpen: false
};

const layoutReducer = (prevState = layoutStore, action) => {
  switch (action.name) {
    case LAYOUT_NAVBAR_TOGGLE_ACTION:
      return Object.assign({}, prevState, {
        isNavbarOpen: action.data
      });
    default:
      return prevState;
  } 
};

export { layoutStore, layoutReducer };