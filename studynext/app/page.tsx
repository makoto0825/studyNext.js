"use client";
import UseOptimistic from "././components/UseOptimistic";
import { useState } from "react";

export default function Home() {
  //useState(original state)
  const [originalState, setOriginalState] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);

  //function update original state
  const sendMessage = async (formData: FormData) => {
    await new Promise((res) => setTimeout(res, 2000));
    const sentMessage = formData.get("message") as string;
    setOriginalState((originalState) => [
      ...originalState,
      { text: sentMessage, sending: false, key: originalState.length + 1 },
    ]);
  };

  return (
    <UseOptimistic originalState={originalState} sendMessage={sendMessage} />
  );
}
