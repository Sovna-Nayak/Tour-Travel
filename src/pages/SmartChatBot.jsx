// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const BOT_DELAY = 500;

// // ✅ SAMPLE HOTEL DATA
// const hotels = {
//   goa: ["Taj Resort ₹5000", "Beach View ₹3000"],
//   delhi: ["ITC Hotel ₹6000", "Budget Inn ₹2500"],
// };

// export default function SmartChatBot() {
//   const navigate = useNavigate();
//   const bottomRef = useRef(null);

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [options, setOptions] = useState([]);

//   const addBot = (text) =>
//     setMessages((prev) => [...prev, { from: "bot", text }]);

//   const addUser = (text) =>
//     setMessages((prev) => [...prev, { from: "user", text }]);

//   // ✅ AUTO SCROLL
//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, options]);

//   // ✅ GREETING AUTO LOAD
//   useEffect(() => {
//     if (messages.length === 0) {
//       setTimeout(() => {
//         addBot(getGreeting());
//         setOptions([
//           "Search Hotels",
//           "Book Room",
//           "Offers",
//           "Payment Issue",
//           "Refund",
//           "Cancellation",
//           "Help Desk",
//         ]);
//       }, BOT_DELAY);
//     }
//   }, []);

//   const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return "🌅 Good Morning! Welcome to FirstTrack Travel";
//     if (hour < 18) return "☀️ Good Afternoon! How can I help you?";
//     return "🌙 Good Evening! Need travel help?";
//   };

//   // ✅ HANDLE SEND
//   const handleSend = (text = input) => {
//     if (!text.trim()) return;

//     const msg = text.toLowerCase().trim();
//     addUser(text);
//     setInput("");
//     setOptions([]);

//     setTimeout(() => {
//       let reply = "";

//       // 🔥 HOTEL SEARCH
//       if (msg.includes("hotel") || msg === "search hotels") {
//         reply = "🏨 Enter your destination (Goa, Delhi)";
//       } 
//       else if (hotels[msg]) {
//         reply = `🌍 Hotels in ${msg.toUpperCase()}:\n${hotels[msg].join("\n")}`;
//         setOptions(["Book Now", "Search Again"]);
//       } 

//       // 🔥 BOOKING
//       else if (msg.includes("book")) {
//         reply = "📝 Redirecting to booking page...";
//         setTimeout(() => navigate("/hotels"), 1000);
//       } 

//       // 🔥 OFFERS
//       else if (msg.includes("offer")) {
//         reply = "🎉 Get up to 30% discount on summer bookings!";
//       } 

//       // 🔥 HELP DESK PAGE
//       else if (msg.includes("help")) {
//         reply = "📞 Opening Help Desk...";
//         setTimeout(() => navigate("/support/chat"), 1000);
//       }

//       // 💳 PAYMENT ISSUE
//       else if (
//         msg.includes("payment") ||
//         msg.includes("paid") ||
//         msg.includes("transaction")
//       ) {
//         reply = "💳 Facing payment issue? Please choose:";
//         setOptions(["Payment Failed", "Amount Deducted", "Retry Payment"]);
//       }

//       // 💸 REFUND
//       else if (msg.includes("refund")) {
//         reply =
//           "💸 Refund usually takes 5-7 working days.\nDo you want to check status?";
//         setOptions(["Check Refund Status", "Talk to Support"]);
//       }

//       // ❌ CANCELLATION
//       else if (msg.includes("cancel")) {
//         reply =
//           "❌ You can cancel booking from 'My Bookings' section.\nNeed help?";
//         setOptions(["Cancel My Booking", "Contact Support"]);
//       }

//       // 🔥 OPTION HANDLING
//       else if (msg === "payment failed") {
//         reply = "⚠️ Payment failed. Please retry or check your bank.";
//       }

//       else if (msg === "amount deducted") {
//         reply =
//           "💰 Amount deducted? It will be auto-refunded within 5-7 days.";
//       }

//       else if (msg === "retry payment") {
//         reply = "🔄 Redirecting to payment page...";
//         setTimeout(() => navigate("/booking/1"), 1000);
//       }

//       else if (msg === "check refund status") {
//         reply = "📊 Please enter your booking ID to check refund.";
//       }

//       else if (msg === "cancel my booking") {
//         reply = "📝 Redirecting to your bookings...";
//         setTimeout(() => navigate("/booking/1"), 1000);
//       }

//       else if (msg === "contact support" || msg === "talk to support") {
//         reply = "📞 Connecting to support...";
//         setTimeout(() => navigate("/support/chat"), 1000);
//       }

//       else if (msg === "search again") {
//         reply = "🔍 Enter another destination (Goa, Delhi)";
//       }

//       // ❓ DEFAULT
//       else {
//         reply = "❓ Try: hotel, Goa, booking, payment, refund";
//         setOptions([
//           "Search Hotels",
//           "Payment Issue",
//           "Refund",
//           "Cancellation",
//           "Help Desk",
//         ]);
//       }

//       addBot(reply);
//     }, BOT_DELAY);
//   };

//   // ✅ ENTER KEY
//   const handleKey = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   return (
//     <div className="w-full max-w-md bg-white rounded-xl shadow-xl flex flex-col overflow-hidden">
      
//       {/* HEADER */}
//       <div className="bg-blue-600 text-white p-3 text-center font-semibold">
//         💬 FirstTrack Assistant
//       </div>

//       {/* MESSAGES */}
//       <div className="h-72 overflow-y-auto p-2 bg-gray-100">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`flex ${
//               msg.from === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`p-2 my-1 rounded-lg text-sm max-w-[75%] ${
//                 msg.from === "user"
//                   ? "bg-blue-500 text-white"
//                   : "bg-white shadow"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}

//         {/* OPTIONS */}
//         {options.length > 0 && (
//           <div className="flex flex-wrap gap-2 mt-2">
//             {options.map((opt) => (
//               <button
//                 key={opt}
//                 onClick={() => handleSend(opt)}
//                 className="bg-white border px-3 py-1 rounded-full text-sm hover:bg-blue-100"
//               >
//                 {opt}
//               </button>
//             ))}
//           </div>
//         )}

//         <div ref={bottomRef} />
//       </div>

//       {/* INPUT */}
//       <div className="flex border-t">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKey}
//           placeholder="Type message..."
//           className="flex-1 p-2 outline-none"
//         />
//         <button
//           onClick={() => handleSend()}
//           className="bg-blue-600 text-white px-4"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import hotelsData from "../data/hotelsData";

const BOT_DELAY = 500;

// ✅ FILTER HOTELS
const getHotelsByCity = (city) => {
  return hotelsData.filter(
    (hotel) => hotel.location.toLowerCase() === city
  );
};

export default function SmartChatBot() {
  const navigate = useNavigate();
  const bottomRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);

  const addBot = (text) =>
    setMessages((prev) => [...prev, { from: "bot", text }]);

  const addUser = (text) =>
    setMessages((prev) => [...prev, { from: "user", text }]);

  // ✅ AUTO SCROLL FIX (mobile friendly)
  useEffect(() => {
    if (!bottomRef.current) return;

    const container = bottomRef.current.parentElement;

    const isNearBottom =
      container.scrollHeight - container.scrollTop <=
      container.clientHeight + 50;

    if (isNearBottom) {
      bottomRef.current.scrollIntoView({
        behavior: window.innerWidth < 768 ? "auto" : "smooth",
      });
    }
  }, [messages]);

  // ✅ GREETING
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBot(getGreeting());
        setOptions([
          "Search Hotels",
          "Book Room",
          "Offers",
          "Payment Issue",
          "Refund",
          "Cancellation",
          "Help Desk",
        ]);
      }, BOT_DELAY);
    }
  }, [isOpen]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "🌅 Good Morning! Welcome to FirstTrack Travel";
    if (hour < 18) return "☀️ Good Afternoon! How can I help you?";
    return "🌙 Good Evening! Need travel help?";
  };

  // ✅ MAIN LOGIC FIXED
  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const msg = text.toLowerCase().trim();
    addUser(text);
    setInput("");
    setOptions([]);

    setTimeout(() => {
      let reply = "";

      // 🔥 HOTEL SEARCH BUTTON
      // if (msg.includes("hotel") || msg === "search hotels") {
      //   reply = "🏨 Enter your destination (Goa, Delhi)";
      // }
      if (msg === "search hotels") {
        reply = "🏨 Opening hotel page...";
        setTimeout(() => {
          navigate("/hotels");
        }, 800);
      }
      
      else if (msg.includes("hotel")) {
        reply = "🏨 Enter your destination (Goa, Delhi)";
      }

      // 🔥 CITY SEARCH (IMPORTANT FIX)
      else if (getHotelsByCity(msg).length > 0) {
        const results = getHotelsByCity(msg);

        reply =
          `🌍 Hotels in ${msg.toUpperCase()}:\n` +
          results.map((h) => `${h.name} ₹${h.price}`).join("\n");

        setOptions(["Book Now", "Search Again"]);
      }

      // 🔥 BOOKING
      else if (msg.includes("book") || msg === "book now") {
        reply = "📝 Redirecting to hotel page...";
        setTimeout(() => {
          navigate("/hotels");
        }, 800);
      }

      // 🔥 OFFERS
      else if (msg.includes("offer")) {
        reply = "🎉 Get up to 30% discount!";
      }

      // 💳 PAYMENT
      else if (msg.includes("payment")) {
        reply = "💳 Payment issue? Choose:";
        setOptions(["Payment Failed", "Amount Deducted", "Retry Payment"]);
      }

      // 💸 REFUND
      else if (msg.includes("refund")) {
        reply = "💸 Refund takes 5-7 working days.";
      }

      // ❌ CANCELLATION
      else if (msg.includes("cancel")) {
        reply = "❌ Cancel from 'My Bookings'.";
      }

      // 📞 HELP
      else if (msg.includes("help")) {
        reply = "📞 Opening Help Desk...";
        setTimeout(() => navigate("/support/chat"), 1000);
      }

      // 🔁 OPTIONS HANDLING
      else if (msg === "payment failed") {
        reply = "⚠️ Payment failed. Try again.";
      }

      else if (msg === "amount deducted") {
        reply = "💰 Amount will be refunded in 5-7 days.";
      }

      else if (msg === "retry payment") {
        reply = "🔄 Redirecting...";
        setTimeout(() => navigate("/booking/1"), 1000);
      }

      else if (msg === "search again") {
        reply = "🔍 Enter destination (Goa, Delhi)";
      }

      // ❓ DEFAULT
      else {
        reply = "❓ Try: hotel, Goa, payment, refund";
        setOptions([
          "Search Hotels",
          "Payment Issue",
          "Refund",
          "Cancellation",
        ]);
      }

      addBot(reply);
    }, BOT_DELAY);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col items-center gap-4">

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          💬 Chat with us
        </button>
      )}

      {isOpen && (
        <div className="w-80 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden">

          {/* HEADER */}
          <div className="bg-blue-600 text-white p-3 flex justify-between">
            <span>FirstTrack Assistant</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {/* MESSAGES */}
          <div className="h-64 overflow-y-auto p-2 bg-gray-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 my-1 rounded-lg text-sm max-w-[75%] ${
                    msg.from === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black shadow"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* OPTIONS */}
            {options.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSend(opt)}
                    className="bg-white border px-3 py-1 rounded-full text-sm font-semibold text-gray-800 hover:bg-blue-100"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* INPUT */}
          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type message..."
              className="flex-1 p-2 outline-none text-black placeholder-gray-500"
            />
            <button
              onClick={() => handleSend()}
              className="bg-blue-600 text-white px-4"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}