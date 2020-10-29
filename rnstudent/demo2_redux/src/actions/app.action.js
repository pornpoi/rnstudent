export const setCheckIn = (payload) => ({
  type: type,
  payload,
});

checkIn = (username) => {
  return (dispatch) => {
    dispatch(setCheckIn(username));
  };
};
