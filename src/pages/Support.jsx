// pages/Support.jsx
import React, { useState } from "react";
import { Search, Phone, Mail, MessageCircle, BookOpen, CreditCard, User, Map } from "lucide-react";
const Support = () => {
  const [search, setSearch] = useState("");

  const faqs = [
    "How to book a hotel?",
    "How to cancel booking?",
    "Refund process time?",
    "How to contact support?",
  ];

  const categories = [
    { title: "Bookings", desc: "Manage your hotel & package bookings", icon: <BookOpen /> },
    { title: "Payments", desc: "Payment issues & refunds", icon: <CreditCard /> },
    { title: "Account", desc: "Login, signup & profile issues", icon: <User /> },
    { title: "Travel Info", desc: "Guides & travel policies", icon: <Map /> },
  ];
  return (
    <div className="flex flex-col">

      {/* 🔷 Hero Section */}
      <section className="relative w-full h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80"
          alt="Support Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Help & Support
          </h1>
          <p className="text-white mt-2 text-lg">
            How can we assist you today?
          </p>

          {/* 🔍 Search Bar */}
          <div className="mt-6 w-full max-w-xl relative">
            <input
              type="text"
              placeholder="Search your issue..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-4 top-3.5 text-gray-500" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* ⚡ Quick Help Categories */}
            <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Quick Help
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

                {categories.map((cat, i) => {
                const styles = [
                    "bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700",
                    "bg-green-50 hover:bg-green-100 border-green-200 text-green-700",
                    "bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-700",
                    "bg-orange-50 hover:bg-orange-100 border-orange-200 text-orange-700",
                ];

                return (
                    <div
                    key={i}
                    className={`p-6 rounded-xl border shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 text-center ${styles[i]}`}
                    >
                    <div className="mx-auto mb-3 p-3 rounded-full bg-white shadow">
                       {React.cloneElement(cat.icon, { className: "h-6 w-6" })}
                    </div>

                    <h3 className="font-semibold text-lg">{cat.title}</h3>

                    <p className="text-sm mt-1 opacity-80">{cat.desc}</p>
                    </div>
                );
                })}

            </div>
            </section>
        {/* <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Quick Help
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1 text-center"
              >
                <HelpCircle className="mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold text-lg">{cat.title}</h3>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* ❓ FAQs */}
        {/* <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {faqs
              .filter((f) =>
                f.toLowerCase().includes(search.toLowerCase())
              )
              .map((faq, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
                >
                  {faq}
                </div>
              ))}
          </div>
        </section> */}

        {/* 📞 Contact Options */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Chat */}
            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition">
              <MessageCircle className="mx-auto text-green-500 mb-3" />
              <h3 className="font-semibold text-lg">Live Chat</h3>
              <p className="text-gray-500 text-sm mb-4">
                Chat with our support team instantly
              </p>
              <button className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition">
                Start Chat
              </button>
            </div>

            {/* Call */}
            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition">
              <Phone className="mx-auto text-blue-500 mb-3" />
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-gray-500 text-sm mb-4">
                Available 24/7 for assistance
              </p>
              <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition">
                Call Now
              </button>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition">
              <Mail className="mx-auto text-red-500 mb-3" />
              <h3 className="font-semibold text-lg">Email Support</h3>
              <p className="text-gray-500 text-sm mb-4">
                Send us your queries anytime
              </p>
              <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition">
                Send Email
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default Support;