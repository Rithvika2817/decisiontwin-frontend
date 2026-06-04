function MessageBubble({

  message,
  sender

}) {

  return (

    <div
      className={`mb-4 flex

      ${
        sender === "user"
        ? "justify-end"
        : "justify-start"
      }`}
    >

      <div
        className={`rounded-2xl px-5 py-3 max-w-[70%]

        ${
          sender === "user"

          ? "bg-purple-600"

          : "bg-white/10"
        }`}
      >

        {message}

      </div>

    </div>

  );

}

export default MessageBubble;