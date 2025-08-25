import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headImage from '../assets/khatubaba.webp';

// Import videos manually
import video1 from '../assets/shyam1.mp4';
import video2 from '../assets/shyam2.mp4';
import video3 from '../assets/shyam3.mp4';

const KhatushyamPage = () => {
  return (
    <div className="bg-red-700 text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl overflow-hidden shadow-lg mt-20 sm:mt-24">
          <img src={headImage} alt="Khatushyam Temple" className="w-full h-auto object-cover" />
        </div>

        <div className="mt-12 sm:mt-16">
          <span className="inline-block bg-black text-red-600 px-4 py-1 rounded-full text-white font-medium mb-3">
            Divine Temple
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-white">
            Shri Khatushyam Ji Temple - The Miracle Temple of Rajasthan
          </h1>
          <p className="text-lg text-white mb-8">
            Dive deep into the glory and legends of Khatushyam Ji, the deity believed to be an incarnation of Barbarika, grandson of Bhima.
          </p>

          <div className="flex flex-wrap items-center text-sm text-white gap-6 mb-10">
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> <span>August 6, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> <span>7 min read</span>
            </div>
            <div>
              <span>By <strong className="text-white">Temple Chronicle Team</strong></span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none prose-red text-white">
            <h2>Introduction</h2>
            <p>
              Located in Sikar, Rajasthan, the Khatushyam Ji Temple is a highly revered pilgrimage site for Hindus. It is visited by millions every year to seek blessings, especially during the Phalguna Mela.
            </p>

            <h3>1. Who is Khatushyam Ji?</h3>
            <p>
              Khatushyam Ji is believed to be the reincarnation of Barbarika, the grandson of Bhima. He was blessed by Lord Krishna to be worshipped in Kali Yuga as "Shyam".
            </p>

            <h3>2. Sacred Pond and Rituals</h3>
            <ul>
              <li>Devotees take a holy dip in the sacred pond near the temple.</li>
              <li>Offerings of flowers, coconut, and sweets are made to the deity.</li>
              <li>Chanting of "Shyam Baba" bhajans is common throughout the day.</li>
            </ul>

            <h3>3. Architecture and Design</h3>
            <p>
              The temple is built with white marble and features intricately carved floral patterns. The sanctum houses the idol of Khatushyam Ji adorned with a lavish crown and garlands.
            </p>

            <h3>4. Annual Fair - Phalguna Mela</h3>
            <p>
              Every year, during the month of Phalguna (Feb-Mar), a grand fair is organized attracting lakhs of devotees from across the country.
            </p>

            <h2>Conclusion</h2>
            <p>
              Whether you're spiritually inclined or simply curious about cultural heritage, a visit to Khatushyam Ji Temple offers divine peace and awe-inspiring devotion.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Khatushyam</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Barbarika</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Rajasthan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="bg-red-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Watch Temple Moments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-64 object-cover">
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2 text-center text-white">Morning Aarti at Khatushyam Ji</p>
            </div>

            {/* Video 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-64 object-cover">
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2 text-center text-white">Temple Architecture Walkthrough</p>
            </div>

            {/* Video 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-64 object-cover">
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2 text-center text-white">Phalguna Mela Highlights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-pink-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end gap-3 mt-4">
            <Link to="/about" className="bg-red-600 text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-red-700 transition">
              ← Back to Blog
            </Link>
            <Link to="/" className="bg-slate-800 text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-slate-900 transition">
              ← Back to Home
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-8">Explore More Temples</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={headImage} alt="Khatushyam Temple" className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mb-2">
                  Devotion
                </span>
                <h3 className="text-black font-semibold mb-2">Miracles of Shyam Baba You Should Know</h3>
                <p className="text-sm text-black mb-4">
                  Devotees share real-life miracles experienced at the holy shrine.
                </p>
                <Link
                  to="/khatushyam"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-red-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions? Reach Out to Us</h2>
          <p className="mb-10">Share your queries or feedback. We are happy to assist you.</p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-full text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KhatushyamPage;
