const initialState = {
  dataArray: [],
  isFetching: false,
  isError: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case typeName:
      return {...state, ...payload};

    default:
      return state;
  }
};
