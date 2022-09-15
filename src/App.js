
import React, { useState } from "react";
import NewMessageForm from "./NewMessageForm";

const App = () => {
  const [heading, setHeading] = useState("CodeSweetly Test");

  const handleClick = () => {
    setHeading("A CodeSweetly Project");
  };

  return (
      <NewMessageForm />
  );
};

export default App;