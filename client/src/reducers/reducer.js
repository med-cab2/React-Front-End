export const initialState = [
  {
    name: "",
    aroma: "",
    qualities: "",
    description: ""
  }
];

export const strainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_STRAIN":
      return {
        ...state.map(strain => {})
      };
    default:
      return state;
  }
};
