import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import kashiImage from '../assets/kashiVishwanathImage.jpg';
import khatushyamImage from '../assets/khatushyamImage.webp';

const TempleBlog = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const temples = [
    {
      id: 1,
      name: "Kashi Vishnath Temple",
      location: "Varanasi, Uttar Pradesh",
      date: "1780 AD",
      description: "The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva...",
      fullDescription: "...",
      features: ["Jyotirlinga", "Golden Spire", "Ghats Nearby", "Spiritual Hub"],
      category: "shiva",
      image: kashiImage,
      link: "/kashivishwanath",
    },
    {
      id: 2,
      name: "Khatushyam Temple",
      location: "Sikar, Rajasthan",
      date: "1727 AD",
      description: "Shri Khatu Shyam Ji Temple is a Hindu temple dedicated to Khatushyam...",
      fullDescription: "...",
      features: ["Barbarika Worship", "Miracles", "Sacred Pond", "Annual Fair"],
      category: "vishnu",
      image: khatushyamImage,
      link: "/khatushyam",
    }
  ];

  const filteredTemples = activeTab === 'all'
    ? temples
    : temples.filter(temple => temple.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold font-serif mb-6">Discover Sacred Temples of India</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Explore the spiritual heritage, architectural marvels, and divine energy of India's most revered temples</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-medium transition transform hover:scale-105">
              Explore Temples
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-800 text-white px-6 py-3 rounded-full font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif mb-4 text-amber-800">Temple Chronicles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Journey through the spiritual heart of India with our curated collection of temple stories, histories, and divine experiences.</p>

          {/* Category Tabs */}
          <div className="flex justify-center mt-10 mb-14">
            <div className="inline-flex bg-white rounded-full p-1 shadow-md">
              {["all", "shiva", "vishnu"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full transition ${activeTab === cat ? 'bg-amber-500 text-white' : 'text-gray-600 hover:text-amber-700'}`}
                >
                  {cat === "all" ? "All Temples" : `${cat.charAt(0).toUpperCase()}${cat.slice(1)} Temples`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Temple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredTemples.map((temple) => (
            <div key={temple.id} className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64">
                <img src={temple.image} alt={temple.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-amber-800">{temple.name}</h3>
                    <div className="flex items-center mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600">{temple.location}</span>
                    </div>
                  </div>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">{temple.date}</span>
                </div>
                <p className="text-gray-700 mb-6">{temple.description}</p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {temple.features.map((feature, index) => (
                      <span key={index} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="flex items-center text-amber-700 font-medium hover:text-amber-800 group"
                  onClick={() => navigate(temple.link)}
                >
                  Full Blog
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl p-10 mt-20 shadow-xl">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold font-serif mb-4">Join Our Spiritual Journey</h3>
            <p className="max-w-2xl mx-auto mb-8 text-amber-100">Subscribe to our newsletter and receive updates on temple histories, festivals, and spiritual insights directly to your inbox.</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-300 text-gray-700"
              />
              <button className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-medium transition shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleBlog;
