import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../redux/chat/chatAction";
import { v4 as uuidv4 } from "uuid";
import Message from "../Message/Message";
import "./MessageArea.scss";

function MessageArea({ message, id }) {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const noMessage = message.length === 0;

  const realMessage = {
    id: uuidv4(),
    message: text,
  };

  const onSendMessage = () => {
    if (text) {
      dispatch(sendMessage({ message: realMessage, id: id }));
      setText("");
    }
  };

  return (
    <div className="message-area">
      <div className="messages">
        {message.map((message) => (
          <Message text={message.message} key={message.id} />
        ))}
      </div>
      <div className="inputs">
        {noMessage ? <p className="no-message">No previous message</p> : null}
        <input
          value={text}
          type="text"
          className="text-box"
          onKeyPress={(e) => (e.key === "Enter" ? onSendMessage() : null)}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="send"
          disabled={!text ? true : false}
          onClick={onSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageArea;
