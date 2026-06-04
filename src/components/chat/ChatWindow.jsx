import { useState } from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow() {

  const [messages,setMessages] = useState([

    {
      sender:"assistant",
      message:
      "Hello! Ask me about your business decisions."
    }

  ]);

  const [input,setInput] =
    useState("");

  const sendMessage = () => {

  if(!input.trim()) return;

  const userMessage = input;

  setMessages((prev)=>[

    ...prev,

    {
      sender:"user",
      message:userMessage
    }

  ]);

  setInput("");

  const fullResponse =
    "Based on the simulation, revenue may increase while risk remains moderate.";

  let index = 0;

  setMessages((prev)=>[

    ...prev,

    {
      sender:"assistant",
      message:""
    }

  ]);

  const interval = setInterval(()=>{

    index++;

    setMessages((prev)=>{

      const updated = [...prev];

      updated[updated.length - 1] = {

        sender:"assistant",

        message:
          fullResponse.slice(0,index)

      };

      return updated;

    });

    if(index >= fullResponse.length){

      clearInterval(interval);

    }

  },50);

};

  return (

    <div className="rounded-3xl bg-white/5 p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI Copilot

      </h2>

      <div className="h-[350px] overflow-y-auto mb-4">

        {messages.map(

          (msg,index)=>(

            <MessageBubble
              key={index}
              sender={msg.sender}
              message={msg.message}
            />

          )

        )}

      </div>

      <div className="flex gap-3">

        <input
          value={input}
          onChange={(e)=>
            setInput(e.target.value)
          }
          placeholder="Type message..."
          aria-label="Chat message"
          className="
  flex-1
  rounded-xl
  bg-black/30
  p-3
  border
  border-white/10
  focus:border-purple-500
  focus:outline-none
"
        />

        <button
          aria-label="Send message"
          onClick={sendMessage}
          className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6"
        >
          Send
        </button>

      </div>

    </div>

  );

}

export default ChatWindow;