import { composeWithDevTools } from "redux-devtools-extension";

const { createStore } = require("redux");
const { default: rootReducer } = require("./rootReducer/rootReducer");

const store = createStore(rootReducer, composeWithDevTools());

export default store;
