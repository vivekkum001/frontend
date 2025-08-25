import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headImage from '../assets/kashiVishwanathImage.jpg'; // Replace with actual Kashi Vishwanath image
import video1 from '../assets/kashi3.mp4';
import video2 from '../assets/kashi2.mp4';
import video3 from '../assets/kashi1.mp4';

const KashiVishwanathPage = () => {
  return (
    <div className="bg-purple-900 text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl overflow-hidden shadow-lg mt-20 sm:mt-24">
          <img src={headImage} alt="Kashi Vishwanath Temple" className="w-full h-auto object-cover" />
        </div>

        <div className="mt-12 sm:mt-16">
          <span className="inline-block bg-black text-yellow-400 px-4 py-1 rounded-full text-white font-medium mb-3">
            Sacred Pilgrimage
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-white">
            Kashi Vishwanath Temple – A Journey to the Heart of Varanasi
          </h1>
          <p className="text-lg text-white mb-8">
            Discover the spiritual essence of one of the holiest and oldest temples dedicated to Lord Shiva, nestled on the banks of the Ganga in Varanasi.
          </p>

          <div className="flex flex-wrap items-center text-sm text-white gap-6 mb-10">
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> <span>August 6, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock /> <span>8 min read</span>
            </div>
            <div>
              <span>By <strong className="text-white">Temple Chronicle Team</strong></span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none prose-invert text-white">
            <h2>Introduction</h2>
            <p>
              Kashi Vishwanath Temple, situated in the spiritual capital of India – Varanasi, is a sacred abode of Lord Shiva and a beacon of Hindu faith and heritage.
            </p>

            <h3>1. Importance in Hinduism</h3>
            <p>
              Known as one of the 12 Jyotirlingas, it is believed that a visit to Kashi grants moksha (liberation). Lord Shiva is worshipped here as Vishwanath or “Ruler of the Universe.”
            </p>

            <h3>2. Ancient History and Restoration</h3>
            <p>
              Originally constructed in ancient times, the temple has been rebuilt several times due to invasions. The current structure was rebuilt by Ahilyabai Holkar in 1780.
            </p>

            <h3>3. Kashi Corridor & Modern Developments</h3>
            <p>
              The newly inaugurated Kashi Vishwanath Corridor has transformed the pilgrimage experience, connecting the temple directly to the Ganga with clean, wide pathways and restored heritage.
            </p>

            <h3>4. Rituals and Festivities</h3>
            <ul>
              <li>Daily Rudrabhishek of the Shivling with sacred chants.</li>
              <li>Ganga Aarti in the evening nearby at Dashashwamedh Ghat.</li>
              <li>Major festivals: Mahashivratri, Sawan Month, Kartik Purnima.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              A visit to Kashi Vishwanath Temple is not just a religious act, but a deeply spiritual journey where the soul connects with the divine in its purest form.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Kashi</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Varanasi</span>
              <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">Jyotirlinga</span>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="bg-purple-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Divine Moments in Motion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-64 object-cover">
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2 text-center text-white">Shiv Aarti from Kashi Vishwanath</p>
            </div>

            {/* Video 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-64 object-cover">
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2 text-center text-white">Exploring the Kashi Corridor</p>
            </div>

            {/* Video 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-64 object-cover">
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2 text-center text-white">Mahashivratri Celebrations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-purple-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end gap-3 mt-4">
            <Link to="/about" className="bg-purple-600 text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-purple-700 transition">
              ← Back to Blog
            </Link>
            <Link to="/" className="bg-slate-800 text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-slate-900 transition">
              ← Back to Home
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-8">Explore More Temples</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={headImage} alt="Kashi Vishwanath Temple" className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm mb-2">
                  Shiva Temple
                </span>
                <h3 className="text-black font-semibold mb-2">Spiritual Energy of Varanasi</h3>
                <p className="text-sm text-black mb-4">
                  Learn how this sacred city inspires inner awakening and liberation.
                </p>
                <Link
                  to="/kashivishwanath"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-purple-800 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-purple-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Visit Kashi? Let Us Help</h2>
          <p className="mb-10">Contact us for travel guides, spiritual support, or itinerary planning.</p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-full text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KashiVishwanathPage;
