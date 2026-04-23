// pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MessageCircle } from "lucide-react";

const Blogs = () => {
  const posts = [
    {
      title: "Top 10 Beaches to Visit in 2026",
      category: "Travel Tips",
      date: "March 10, 2026",
      comments: 12,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      link: "/blog/top-10-beaches"
    },
    {
      title: "How to Plan a Budget-Friendly Vacation",
      category: "Budget Travel",
      date: "February 25, 2026",
      comments: 8,
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
      link: "/blog/budget-friendly-vacation"
    },
    {
      title: "Luxury Hotels Worth Visiting",
      category: "Luxury Travel",
      date: "January 15, 2026",
      comments: 5,
      image: "/luxury_hotel.jpg",
      link: "/blog/luxury-hotels"
    },
  ];

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-96">
        <img 
          src="/blog.jpg"
          alt="Travel Blog Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Travel Blog
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl max-w-2xl">
            Discover inspiring travel stories, tips, and guides from FirstTrack Tour & Travel.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Blog Posts */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              to={post.link}
              className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 group-hover:text-pink-500 transition">{post.title}</h3>
                <div className="flex items-center justify-between mt-3 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Link
            to="/blog"
            className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition transform inline-block"
          >
            View All Posts
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Blogs;