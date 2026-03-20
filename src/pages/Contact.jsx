// // pages/Contact.jsx
// import React, { useState } from "react";
// import { Phone, Mail, MapPin, Send } from "lucide-react";


// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message Sent Successfully ✅");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="flex flex-col">

//       {/* 🔷 Hero Banner */}
//       <section className="relative w-full h-64 md:h-80">
//         <img
//           src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
//           alt="Contact Banner"
//           className="w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white">
//             Contact Us
//           </h1>
//         </div>
//       </section>

//             {/* 📞 Contact Info Cards */}
//             <section className="grid md:grid-cols-3 gap-6">

//             {/* Call */}
//             <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
//                 <Phone className="mx-auto mb-3" size={30} />
//                 <h3 className="font-semibold text-lg">Call Us</h3>
//                 <p className="text-sm opacity-90">+91 1234567890</p>
//             </div>

//             {/* Email */}
//             <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
//                 <Mail className="mx-auto mb-3" size={30} />
//                 <h3 className="font-semibold text-lg">Email</h3>
//                 <p className="text-sm opacity-90">firsttracktravel@gmail.com</p>
//             </div>

//             {/* Location */}
//             <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
//                 <MapPin className="mx-auto mb-3" size={30} />
//                 <h3 className="font-semibold text-lg">Location</h3>
//                 <p className="text-sm opacity-90">Bhubaneswar, Odisha</p>
//             </div>

//             </section>

//         {/* ✉️ Contact Form + Map */}
//         <section className="grid md:grid-cols-2 gap-8">

//           {/* Form */}
//           <div className="bg-white p-8 rounded-xl shadow">
//             <h2 className="text-2xl font-bold text-blue-900 mb-6">
//               Send Us a Message
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">

//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
//                 required
//               />

//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
//                 required
//               />

//               <textarea
//                 placeholder="Your Message"
//                 rows="5"
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
//                 required
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
//               >
//                 Send Message <Send size={18} />
//               </button>

//             </form>
//           </div>

//           {/* Map */}
//           <div className="rounded-xl overflow-hidden shadow">
//             <iframe
//               title="map"
//               src="https://maps.google.com/maps?q=Bhubaneswar&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               className="w-full h-full min-h-[400px] border-0"
//               loading="lazy"
//             ></iframe>
//           </div>

//         </section>

//       </div>
  
//   );
// };

// export default Contact;





// pages/Contact.jsx
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col">

      {/* 🔷 Hero Banner */}
      <section className="relative w-full h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* 🔥 Floating Contact Cards */}
{/* 🔥 Floating Contact Cards */}
<section className="relative -mt-16 z-10 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

    {/* Call */}
    <div className="backdrop-blur-lg bg-white/80 border border-gray-200 p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
      <div className="bg-blue-100 p-3 rounded-full inline-block mb-3">
        <Phone size={26} className="text-blue-600" />
      </div>
      <h3 className="font-semibold text-lg text-gray-800">Call Us</h3>
      <p className="text-sm text-gray-600">+91 1234567890</p>
    </div>

    {/* Email */}
    <div className="backdrop-blur-lg bg-white/80 border border-gray-200 p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
      <div className="bg-pink-100 p-3 rounded-full inline-block mb-3">
        <Mail size={26} className="text-pink-600" />
      </div>
      <h3 className="font-semibold text-lg text-gray-800">Email</h3>
      <p className="text-sm text-gray-600">firsttracktravel@gmail.com</p>
    </div>

    {/* Location */}
    <div className="backdrop-blur-lg bg-white/80 border border-gray-200 p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
      <div className="bg-green-100 p-3 rounded-full inline-block mb-3">
        <MapPin size={26} className="text-green-600" />
      </div>
      <h3 className="font-semibold text-lg text-gray-800">Location</h3>
      <p className="text-sm text-gray-600">Bhubaneswar, Odisha</p>
    </div>

  </div>
</section>
      {/* 🔽 Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* ✉️ Form + Map */}
        <section className="grid md:grid-cols-2 gap-8">

          {/* Form */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:scale-105 transition flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>

            </form>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Bhubaneswar&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
            ></iframe>
          </div>

        </section>

      </div>
    </div>
  );
};

export default Contact;