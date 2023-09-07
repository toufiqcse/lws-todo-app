const { STATUSCHANGED, COLORCHANGED } = require("./actionsTypes");
const { default: initialStateFilter } = require("./initialStateFilter");

const filterReducer = (state = initialStateFilter, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      const { changeType, color } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};
export default filterReducer;
