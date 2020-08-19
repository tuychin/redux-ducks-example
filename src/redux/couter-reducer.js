// Actions
const RND = 'redux-ducks-example/counter/RND';
const INC = 'redux-ducks-example/counter/INC';
const DEC = 'redux-ducks-example/counter/DEC';

// Reducer
const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case RND:
        return {
            count: state.count + action.payload
        };
  
      case INC:
        return {
            count: state.count + 1,
        };
  
      case DEC:
        return {
            count: state.count - 1,
        };
  
      default:
        return state;
    }
};

// Action Creators
export const inc = () => ({ type: INC });

export const dec = () => ({ type: DEC });

export const rnd = () => {
    return {
        type: RND,
        payload: Math.floor(Math.random() * 10)
    };
};


export default counterReducer;
