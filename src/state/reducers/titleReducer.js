const reducer = (state='React-App', action) => {
  if(action.type === 'change') {
    return state = action.payload;
  } else {
    return state;
  }
}

export default reducer;