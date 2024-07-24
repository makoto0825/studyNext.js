import { useOptimistic, useRef } from "react";

interface ThreadProps {
  originalState: { text: string; sending: boolean; key: number }[];
  sendMessage: (formData: FormData) => void;
}

const UseOptimistic = ({ originalState, sendMessage }: ThreadProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  //Server Action
  const formAction = async (formData: FormData) => {
    addOptimistic(formData.get("message")); //update useOptimistic state
    formRef.current!.reset();
    //Assumed server-side processing(Data based)
    await sendMessage(formData); //update original state
  };
  const [optimisticState, addOptimistic] = useOptimistic(
    originalState,
    (currentState, optimisticValue) => [
      ...currentState,
      {
        text: optimisticValue as string,
        sending: true,
        key: currentState.length + 1,
      },
    ]
  );

  return (
    <>
      {optimisticState.map((message, index) => (
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
};

export default UseOptimistic;
