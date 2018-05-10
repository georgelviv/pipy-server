export const TOGGLE_NAVBAR = 'toggle navbar';

const reducer = (prevState, action) => {
  switch (action.name) {
    case TOGGLE_NAVBAR:
      return Object.assign({}, prevState, {
        data: 'super puper data'
      });
    default:
      return prevState;
  } 
};

export { reducer };