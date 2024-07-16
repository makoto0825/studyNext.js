import { useOptimistic, useState, useRef } from "react";

interface ThreadProps {
  messages: { text: string; sending: boolean; key: number }[];
  sendMessage: (formData: FormData) => Promise<void>;
}

function UseOptimistic({ messages, sendMessage }: ThreadProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  async function formAction(formData: FormData) {
    addOptimisticMessage(formData.get("message"));
    formRef.current!.reset();

    await sendMessage(formData);
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage as string,
        sending: true,
        key: state.length + 1,
      },
    ]
  );

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default UseOptimistic;
