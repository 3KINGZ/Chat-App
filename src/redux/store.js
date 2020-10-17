import { createStore } from "redux";
import reducer from "./chat/chatReducer";

const store = createStore(reducer);

export default store;
