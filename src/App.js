
import React, { useState } from "react";
import MessageList from "./MessageList";
import NewMessageForm from "./NewMessageForm";

const App = () => {

  const [messages, setMessages] = useState([]);

  function handleSend(newMessage) {
    setMessages([newMessage, ...messages])
  }

  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList data = {messages} />
    </>
  );
};

export default App;