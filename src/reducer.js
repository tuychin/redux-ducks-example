export const initialState = {
    count: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
      case 'RND':
        return {
            count: state.count + action.payload
        };
  
      case 'INC':
        return {
            count: state.count + 1,
        };
  
      case 'DEC':
        return {
            count: state.count - 1,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;