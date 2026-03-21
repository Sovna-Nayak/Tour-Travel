// import React from "react";
// import { MessageCircle } from "lucide-react";

// const WhatsAppButton = () => {
//   const phoneNumber = "911234567890"; // apna number

//   return (
//     <a
//       href={`https://wa.me/${phoneNumber}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
//     >
//       <MessageCircle size={28} />
//     </a>
//   );
// };

// export default WhatsAppButton;







import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "911234567890"; // your number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppButton;