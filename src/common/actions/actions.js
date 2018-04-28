export const GET_DATA_ACTION = 'get data';

const reducer = (prevState, action) => {
  switch (action.name) {
    case GET_DATA_ACTION:
      return Object.assign({}, prevState, {
        data: 'super puper data'
      });
    default:
      return prevState;
  } 
};

export { reducer };