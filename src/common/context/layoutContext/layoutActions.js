const LAYOUT_NAVBAR_TOGGLE_ACTION = 'toggle navbar';

const layoutToogleNavbarAction = (dispatch, isOpen) => {
  dispatch({
    name: LAYOUT_NAVBAR_TOGGLE_ACTION,
    data: isOpen
  })
} 

export { LAYOUT_NAVBAR_TOGGLE_ACTION, layoutToogleNavbarAction };