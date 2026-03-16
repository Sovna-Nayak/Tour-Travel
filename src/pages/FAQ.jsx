import React, { useState } from "react";

const faqData = [
  {
    question: "How can I book a tour package?",
    answer:
      "You can book a tour package directly from our website by selecting your destination and completing the booking process.",
  },
  {
    question: "Do I need to create an account to book a trip?",
    answer:
      "Yes, creating an account helps you manage bookings and receive travel updates easily.",
  },
  {
    question: "Can I modify my booking after confirmation?",
    answer:
      "Yes, you can modify your booking by contacting our customer support team.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept UPI, Debit Card, Credit Card, and Net Banking for secure payments.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes, all payments are processed through secure and encrypted payment gateways.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, bookings can be cancelled according to our cancellation policy.",
  },
  {
    question: "How long does it take to receive a refund?",
    answer:
      "Refunds are usually processed within 5–7 working days after cancellation approval.",
  },
  {
    question: "Can I rent a bike for multiple days?",
    answer:
      "Yes, you can rent bikes for multiple days depending on availability.",
  },
  {
    question: "What documents are required for bike rental?",
    answer:
      "A valid driving license and government ID proof are required for bike rental.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact us via phone, email, or through our contact page on the website.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>

                <span className="text-blue-600 text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default FAQ;