// import React from "react";
// import { Globe, Hotel, Plane, Star, Users, MapPin, Coffee } from "lucide-react";
// import { Link } from "react-router-dom";

// const About = () => {
//   const services = [
//     { icon: <Globe className="h-6 w-6 text-blue-600" />, title: "Tour Packages", description: "Domestic & international travel packages tailored to your needs." },
//     { icon: <Hotel className="h-6 w-6 text-blue-600" />, title: "Hotel Booking", description: "Book hotels at the best prices with verified options." },
//     { icon: <Plane className="h-6 w-6 text-blue-600" />, title: "Transportation", description: "Safe and convenient transportation and car rentals." },
//     { icon: <Coffee className="h-6 w-6 text-blue-600" />, title: "Sightseeing & Activities", description: "Explore destinations with guided tours and activities." },
//   ];

//   const strengths = [
//     { icon: <Star className="h-5 w-5 text-white" />, title: "Trusted Services", description: "Verified and reliable travel services for every traveler." },
//     { icon: <Users className="h-5 w-5 text-white" />, title: "24/7 Support", description: "Round-the-clock customer support for peace of mind." },
//     { icon: <MapPin className="h-5 w-5 text-white" />, title: "Customizable Trips", description: "Personalized travel packages tailored to your preferences." },
//     { icon: <Globe className="h-5 w-5 text-white" />, title: "Affordable Packages", description: "Get the best travel experiences within your budget." },
//   ];

//   const testimonials = [
//     { 
//       name: "Rahul Sharma", 
//       feedback: "Amazing travel experience! Everything was seamless from booking to the trip.",
//       photo: "https://randomuser.me/api/portraits/men/32.jpg" // example photo
//     },
//     { 
//       name: "Anita Verma", 
//       feedback: "Highly recommend FirstTrack! Great packages and very helpful support.",
//       photo: "https://randomuser.me/api/portraits/women/44.jpg" // example photo
//     },
//   ];

//   return (
//     <div className="flex flex-col">

//       {/* Hero Banner */}
//       <section className="relative w-full h-64 md:h-96">
//         <img 
//           src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
//           alt="About Us Banner"
//           className="w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
//             About Us
//           </h1>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

//       {/* Hero Section */}
//         <section className="text-center space-y-4">
//             <p className="text-gray-700 max-w-2xl mx-auto text-lg">
//             <span className="font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
//             FirstTrack Tour & Travel
//             </span> is dedicated to creating unforgettable travel experiences. Explore destinations, book hotels, and plan your trips effortlessly with our trusted services.
//             </p>
//         </section>
//         {/* Mission & Vision */}
//         <section className="grid md:grid-cols-2 gap-6 bg-blue-50 p-6 rounded-lg shadow">
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-900 mb-2">Our Mission</h2>
//             <p className="text-gray-700">
//               To provide affordable, safe, and memorable travel experiences to every traveler.
//             </p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-900 mb-2">Our Vision</h2>
//             <p className="text-gray-700">
//               To be the most trusted travel partner for adventurers and families alike.
//             </p>
//           </div>
//         </section>

//         {/* Services */}
//         <section>
//           <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Services</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((s, i) => (
//               <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition text-center space-y-2">
//                 <div className="mx-auto">{s.icon}</div>
//                 <h3 className="font-semibold text-lg">{s.title}</h3>
//                 <p className="text-gray-600 text-sm">{s.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Strengths */}
//         <section className="bg-blue-900 text-white p-6 rounded-lg">
//           <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {strengths.map((s, i) => (
//               <div key={i} className="bg-blue-700 p-4 rounded-lg flex flex-col items-center text-center space-y-2">
//                 <div className="bg-blue-500 p-2 rounded-full">{s.icon}</div>
//                 <h3 className="font-semibold">{s.title}</h3>
//                 <p className="text-gray-100 text-sm">{s.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

// {/* Testimonials */}
// <section>
//   <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">What Our Customers Say</h2>
//   <div className="grid md:grid-cols-2 gap-6">
//     {testimonials.map((t, i) => (
//       <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition flex items-start gap-4">
//         {/* Customer Photo */}
//         <img
//           src={t.photo} // Make sure to add `photo` in testimonials array
//           alt={t.name}
//           className="h-16 w-16 rounded-full object-cover"
//         />
//         <div>
//           <p className="text-gray-700 italic">"{t.feedback}"</p>
//           <p className="mt-4 font-semibold text-blue-900">{t.name}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

//         {/* Call to Action */}
//         <section className="text-center space-y-4">
//           <h2 className="text-2xl font-bold text-blue-900">Ready to Start Your Journey?</h2>
//           <Link to="/packages" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Explore Our Packages</Link>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default About;





import React from "react";
import { Globe, Hotel, Plane, Star, Users, MapPin, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const services = [
    { icon: <Globe className="h-6 w-6 text-white" />, title: "Tour Packages", description: "Domestic & international travel packages tailored to your needs." },
    { icon: <Hotel className="h-6 w-6 text-white" />, title: "Hotel Booking", description: "Book hotels at the best prices with verified options." },
    { icon: <Plane className="h-6 w-6 text-white" />, title: "Transportation", description: "Safe and convenient transportation and car rentals." },
    { icon: <Coffee className="h-6 w-6 text-white" />, title: "Sightseeing & Activities", description: "Explore destinations with guided tours and activities." },
  ];

  const strengths = [
    { icon: <Star className="h-5 w-5 text-white" />, title: "Trusted Services", description: "Verified and reliable travel services for every traveler." },
    { icon: <Users className="h-5 w-5 text-white" />, title: "24/7 Support", description: "Round-the-clock customer support for peace of mind." },
    { icon: <MapPin className="h-5 w-5 text-white" />, title: "Customizable Trips", description: "Personalized travel packages tailored to your preferences." },
    { icon: <Globe className="h-5 w-5 text-white" />, title: "Affordable Packages", description: "Get the best travel experiences within your budget." },
  ];

  const testimonials = [
    { name: "Rahul Sharma", feedback: "Amazing travel experience! Everything was seamless from booking to the trip.", photo: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Anita Verma", feedback: "Highly recommend FirstTrack! Great packages and very helpful support.", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
  ];

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-96">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="About Us Banner"
          className="w-full h-full object-cover brightness-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">About Us</h1>
          <p className="text-white mt-2 text-lg md:text-xl drop-shadow-md">
            Creating unforgettable travel experiences for every adventure.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Hero Text */}
        <section className="text-center space-y-4">
          <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            <span className="font-extrabold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              FirstTrack Tour & Travel
            </span> is dedicated to creating unforgettable travel experiences. Explore destinations, book hotels, and plan your trips effortlessly with our trusted services.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-6 bg-blue-50 p-8 rounded-xl shadow-lg">
          <div className="hover:scale-105 transition transform bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Our Mission</h2>
            <p className="text-gray-700">To provide affordable, safe, and memorable travel experiences to every traveler.</p>
          </div>
          <div className="hover:scale-105 transition transform bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Our Vision</h2>
            <p className="text-gray-700">To be the most trusted travel partner for adventurers and families alike.</p>
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 p-6 rounded-lg shadow-lg text-center text-white hover:scale-105 transition transform">
                <div className="mx-auto mb-2">{s.icon}</div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strengths */}
        <section className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-blue-700 p-6 rounded-lg flex flex-col items-center text-center space-y-3 shadow hover:scale-105 transition transform">
                <div className="bg-blue-500 p-3 rounded-full">{s.icon}</div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-gray-100 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition flex items-start gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-16 w-16 rounded-full border-2 border-blue-500 object-cover"
                />
                <div>
                  <p className="text-gray-700 italic">"{t.feedback}"</p>
                  <div className="mt-3 flex items-center gap-2">
                    <p className="font-semibold text-blue-900">{t.name}</p>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">Ready to Start Your Journey?</h2>
          <Link
            to="/packages"
            className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 text-white px-8 py-3 rounded-lg hover:scale-105 transition transform inline-flex items-center gap-2"
          >
            Explore Our Packages
          </Link>
        </section>

      </div>
    </div>
  );
};

export default About;