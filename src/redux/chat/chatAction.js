import { SEND_MESSAGE } from "./chatTypes";

export const sendMessage = (details) => {
  return {
    type: SEND_MESSAGE,
    payload: details,
  };
};
