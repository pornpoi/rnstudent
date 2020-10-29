import {CHECKIN} from '../constants';
const initialState = {
  username: '',
  timestamp: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CHECKIN:        
      return {...state, username:payload};

    default:
      return state;
  }
};
