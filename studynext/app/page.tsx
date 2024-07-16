"use client";
import UseOptimistic from "././components/UseOptimistic";
import { useState } from "react";
import { deliverMessage } from "././components/functions";

export default function Home() {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);
  async function sendMessage(formData: FormData) {
    const sentMessage = await deliverMessage(formData.get("message") as string);
    setMessages((messages) => [
      ...messages,
      { text: sentMessage, sending: false, key: messages.length + 1 },
    ]);
  }
  return <UseOptimistic messages={messages} sendMessage={sendMessage} />;
}
