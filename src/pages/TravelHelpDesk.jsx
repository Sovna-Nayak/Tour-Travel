import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const BOT_DELAY = 500;

// ✅ TRAVEL HELP DESK OPTIONS
const OPTIONS = {
  "Hotel Booking Issue": {
    options: [
      "Booking failed",
      "Payment issue",
      "Wrong hotel details",
      "Cancel booking",
    ],
    replies: {
      "Booking failed": "We are checking your booking issue.",
      "Payment issue": "We are verifying your payment.",
      "Wrong hotel details": "We will correct the hotel details.",
      "Cancel booking": "We will help you cancel your booking.",
    },
  },

  "Package Issue": {
    options: [
      "Package not available",
      "Price mismatch",
      "Custom package request",
    ],
    replies: {
      "Package not available": "We will check availability.",
      "Price mismatch": "We are verifying pricing.",
      "Custom package request":
        "We will create a custom travel package for you.",
    },
  },

  "Transport Issue": {
    options: [
      "Driver not assigned",
      "Pickup delay",
      "Vehicle issue",
    ],
    replies: {
      "Driver not assigned": "We are assigning a driver shortly.",
      "Pickup delay": "We are checking the delay.",
      "Vehicle issue": "We will arrange another vehicle.",
    },
  },

  "General Inquiry": {
    options: [
      "Best travel packages",
      "Hotel availability",
      "Offers & discounts",
    ],
    replies: {
      "Best travel packages":
        "We will suggest best packages based on your destination.",
      "Hotel availability":
        "We will check hotel availability for you.",
      "Offers & discounts":
        "We will share latest travel offers with you.",
    },
  },
};

export default function TravelHelpDesk() {
  const navigate = useNavigate();
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [step, setStep] = useState("WELCOME");
  const [currentCategory, setCurrentCategory] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");

  const addBot = (text) =>
    setMessages((prev) => [...prev, { from: "bot", text }]);

  const addUser = (text) =>
    setMessages((prev) => [...prev, { from: "user", text }]);

  // ✅ AUTO SCROLL
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, currentOptions]);

  // ✅ INITIAL MESSAGE
  useEffect(() => {
    setTimeout(() => {
      addBot("👋 Welcome to Travel Help Desk!");
      setTimeout(() => {
        addBot("How can I assist you today?");
        setCurrentOptions([
          "Hotel Booking Issue",
          "Package Issue",
          "Transport Issue",
          "General Inquiry",
          "Other",
        ]);
        setStep("MAIN");
      }, BOT_DELAY);
    }, BOT_DELAY);
  }, []);

  const handleOption = (option) => {
    addUser(option);
    setCurrentOptions([]);

    setTimeout(() => {
      if (step === "MAIN") {
        if (option === "Other") {
          addBot("Please describe your issue below:");
          setShowInput(true);
        } else {
          setCurrentCategory(option);
          addBot("Please choose an option:");
          setCurrentOptions(OPTIONS[option].options);
          setStep("SUB");
        }
      } else if (step === "SUB") {
        addBot(OPTIONS[currentCategory].replies[option]);
        askSolved();
      } else if (step === "SOLVED") {
        handleSolved(option);
      }
    }, BOT_DELAY);
  };

  const askSolved = () => {
    setTimeout(() => {
      addBot("Is your issue resolved?");
      setCurrentOptions(["Yes", "No"]);
      setStep("SOLVED");
    }, BOT_DELAY);
  };

  const handleSolved = (answer) => {
    if (answer === "Yes") {
      addBot("🙏 Thank you for contacting Travel Help Desk!");
    } else {
      addBot("📝 Your request has been submitted. Our team will contact you soon.");
      setTimeout(() => navigate("/"), 2000);
    }
  };

  const submitOtherIssue = () => {
    if (!inputText.trim()) return;
    addUser(inputText);
    setShowInput(false);
    setInputText("");
    addBot("📝 Your request has been submitted. Our team will contact you soon.");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="h-screen bg-[#eef2f7] flex justify-center items-center">

      {/* CHAT BOX */}
      <div className="w-full max-w-md h-[90vh] flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 flex justify-between items-center">
          <p className="font-semibold">Travel Help Desk</p>
          <button onClick={() => navigate("/")} className="text-xl">✕</button>
        </div>

        {/* CHAT BODY */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-[#f5f7fb]">

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white shadow"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* OPTIONS */}
          {currentOptions.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {currentOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOption(opt)}
                  className="bg-white border rounded-full py-2 text-sm hover:bg-blue-100 transition"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* INPUT */}
          {showInput && (
            <div className="flex gap-2 mt-2">
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your issue here..."
                className="flex-1 px-3 py-2 rounded border"
              />
              <button
                onClick={submitOtherIssue}
                className="bg-blue-600 text-white px-4 rounded"
              >
                Send
              </button>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}