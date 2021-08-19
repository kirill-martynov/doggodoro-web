const initialState = {
  timer: {
    work: 5,
    break: 5,
  },
};

export function settingsReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    default:
      return state;
  }
}
