import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    setMessages([...messages, { text: input, sender: "user" }]);

    // fake reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "We will contact you soon 😊", sender: "bot" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-32 right-5 w-80 bg-white shadow-xl rounded-lg flex flex-col overflow-hidden">
          
          <div className="bg-blue-600 text-white p-3 font-semibold">
            Live Support
          </div>

          <div className="p-3 h-64 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 outline-none"
              placeholder="Type message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatWidget;