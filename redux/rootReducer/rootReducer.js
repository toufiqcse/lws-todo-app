const { combineReducers } = require("redux");
const { default: todoReducer } = require("../todos/reducers");
const { default: filterReducer } = require("../filters/reducer");

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});
export default rootReducer;
