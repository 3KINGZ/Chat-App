import { SEND_MESSAGE } from "./chatTypes";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  users: [
    {
      id: uuidv4(),
      name: "Martin",
      messages: [],
    },
    {
      id: uuidv4(),
      name: "Jessie",
      messages: [],
    },
    {
      id: uuidv4(),
      name: "Alexander",
      messages: [],
    },
    {
      id: uuidv4(),
      name: "Eugene",
      messages: [],
    },
    {
      id: uuidv4(),
      name: "Lloyd",
      messages: [],
    },
    {
      id: uuidv4(),
      name: "Caleb",
      messages: [],
    },
    {
      id: uuidv4(),
      name: "Doughlas",
      messages: [],
    },
    {
      id: uuidv4(),
      name: "Phoebe",
      messages: [],
    },
    {
      id: uuidv4(),
      name: "Katie",
      messages: [],
    },
  ],
};

const addToCartReducer = (state = initialState, action) => {
  if (action.type === SEND_MESSAGE) {
    const newState = [...state.users];
    const user = newState[action.payload.id];
    user.messages.push(action.payload.message);
    state.users = newState;
    return state;
  } else {
    return state;
  }
};

export default addToCartReducer;
