import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaRupeeSign, FaStar, FaTimes, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Replace these paths with your actual image paths
import ramMandirImage from '../assets/rammandir.jpg';
import tirupatiImage from '../assets/tirupatiImage.jpg';
import kashiVishwanathImage from '../assets/kashiVishwanathImage.jpg';
import pashupatinathImage from '../assets/pashupatinathImage.png';
import vaishnoDeviImage from '../assets/vaishnoDeviImage.jpeg';
import khatushyamImage from '../assets/khatushyamImage.webp';
import goldenTemplgeImage from '../assets/goldenTemplgeImage.webp';
import meenakshiTempleImage from '../assets/meenakshiTempleImage.jpg';
import jagannathTempleImage from '../assets/jagannathTempleImage.jpg';
import somnathTempleImage from '../assets/SomnathTemple.jpeg';
import badrinathTempleImage from '../assets/badrinathTempleImage.jpg';
import kedarnathTempleImage from '../assets/kedarnathTempleImage.jpg';

// Import your video file from assets (replace with your actual video path)
import adVideoFile from '../assets/Prasad.mp4';

const Home = () => {
  const [currentTempleIndex, setCurrentTempleIndex] = useState(0);
  const [cartCount, setCartCount] = useState(3);
  const [favorites, setFavorites] = useState([]);
  
  // Ad video state with mute control
  const [showAdVideo, setShowAdVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Start muted to allow autoplay
  const videoRef = useRef(null);
  
  // Famous temples data with real images
  const temples = [
    {
      id: 1,
      name: "Ram Mandir",
      location: "Ayodhya, India",
      description: "The newly constructed grand temple dedicated to Lord Rama",
      image: ramMandirImage
    },
    {
      id: 2,
      name: "Tirupati Balaji",
      location: "Andhra Pradesh, India",
      description: "One of the world's richest and most visited Vaishnavite temples",
      image: tirupatiImage
    },
    {
      id: 3,
      name: "Kashi Vishwanath",
      location: "Varanasi, India",
      description: "One of the twelve Jyotirlingas dedicated to Lord Shiva",
      image: kashiVishwanathImage
    },
    {
      id: 4,
      name: "Pashupatinath",
      location: "Kathmandu, Nepal",
      description: "UNESCO World Heritage Site dedicated to Lord Shiva",
      image: pashupatinathImage
    },
    {
      id: 5,
      name: "Vaishno Devi",
      location: "Jammu, India",
      description: "Sacred cave shrine of the Mother Goddess",
      image: vaishnoDeviImage
    },
    {
      id: 6,
      name: "Khatushyam",
      location: "Rajasthan, India",
      description: "Devotional shrine dedicated to Khatushyam, an incarnation of Lord Krishna",
      image: khatushyamImage
    },
    {
      id: 7,
      name: "Golden Temple",
      location: "Amritsar, India",
      description: "Spiritual and cultural center of the Sikh religion",
      image: goldenTemplgeImage
    },
    {
      id: 8,
      name: "Meenakshi Temple",
      location: "Madurai, India",
      description: "Historic Hindu temple dedicated to Goddess Meenakshi",
      image: meenakshiTempleImage
    },
    {
      id: 9,
      name: "Jagannath Temple",
      location: "Puri, India",
      description: "Famous for its annual Rath Yatra festival",
      image: jagannathTempleImage
    },
    {
      id: 10,
      name: "Somnath Temple",
      location: "Gujarat, India",
      description: "The first among the twelve Jyotirlinga shrines of Lord Shiva",
      image: somnathTempleImage
    },
    {
      id: 11,
      name: "Badrinath Temple",
      location: "Uttarakhand, India",
      description: "One of the Char Dham pilgrimage sites dedicated to Lord Vishnu",
      image: badrinathTempleImage
    },
    {
      id: 12,
      name: "Kedarnath Temple",
      location: "Uttarakhand, India",
      description: "Sacred Jyotirlinga shrine of Lord Shiva in the Himalayas",
      image: kedarnathTempleImage
    }
  ];

  // Prasad items data
  const prasadItems = [
    { id: 1, name: "Ram Mandir Laddu", price: 351, temple: "Ram Mandir", rating: 4.8 },
    { id: 2, name: "Tirupati Laddus", price: 351, temple: "Tirupati Balaji", rating: 4.9 },
    { id: 3, name: "Kashi Prasad Set", price: 351, temple: "Kashi Vishwanath", rating: 4.7 },
    { id: 4, name: "Pashupati Special", price: 351, temple: "Pashupatinath", rating: 4.5 },
    { id: 5, name: "Vaishno Devi Dry Fruits", price: 351, temple: "Vaishno Devi", rating: 4.6 },
    { id: 6, name: "Khatushyam Prasad", price: 351, temple: "Khatushyam", rating: 4.4 },
    { id: 7, name: "Golden Temple Kara Prasad", price:351, temple: "Golden Temple", rating: 4.9 },
    { id: 8, name: "Meenakshi Temple Sweets", price: 351, temple: "Meenakshi Temple", rating: 4.3 },
    { id: 9, name: "Jagannath Mahaprasad", price: 351, temple: "Jagannath Temple", rating: 4.8 },
    { id: 10, name: "Somnath Special Prasad", price: 351, temple: "Somnath Temple", rating: 4.7 }
  ];

  // Auto-rotate temple images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTempleIndex((prevIndex) => (prevIndex + 1) % temples.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [temples.length]);

  // Toggle favorite status
  const toggleFavorite = (templeId) => {
    if (favorites.includes(templeId)) {
      setFavorites(favorites.filter(id => id !== templeId));
    } else {
      setFavorites([...favorites, templeId]);
    }
  };

  // Add to cart
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  // Close the ad video
  const closeAd = () => {
    setShowAdVideo(false);
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[95vh] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            key={currentTempleIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${temples[currentTempleIndex].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
        
        <div className="relative container mx-auto h-full flex items-center px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-white px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {temples[currentTempleIndex].name}
            </h1>
            <p className="text-lg sm:text-xl mb-4 sm:mb-6">{temples[currentTempleIndex].location}</p>
            <p className="mb-6 sm:mb-8">{temples[currentTempleIndex].description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 hover:bg-amber-700 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full font-semibold text-base sm:text-lg flex items-center"
            >
              <Link to="/order" className="flex items-center px-4 py-2 text-white rounded">
                <FaShoppingCart className="mr-2" /> Order Prasad
              </Link>
            </motion.button>
          </motion.div>
        </div>
        
        {/* Temple Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {temples.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTempleIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === currentTempleIndex ? 'bg-amber-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* VIDEO SECTION WITH AUDIO CONTROL */}
      {showAdVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Mute button at top left */}
            <button 
              onClick={toggleMute}
              className="absolute top-4 left-4 z-50 text-white bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-colors duration-300 shadow-lg"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <FaVolumeMute className="text-xl" /> : <FaVolumeUp className="text-xl" />}
            </button>
            
            {/* Close button at top right */}
            <button 
              onClick={closeAd}
              className="absolute top-4 right-4 z-50 text-white bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-colors duration-300 shadow-lg"
              aria-label="Close advertisement"
            >
              <FaTimes className="text-xl" />
            </button>
            
            {/* Video player */}
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              playsInline
              className="w-full h-auto rounded-xl shadow-2xl"
            >
              <source src={adVideoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video caption */}
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-medium">Advertisement</p>
              <p className="text-gray-300 text-sm mt-1">
                {isMuted ? "Audio is muted" : "Audio is playing"} - Click speaker to {isMuted ? "unmute" : "mute"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Featured Temples */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-3 sm:mb-4">Sacred Temples</h2>
            <p className="text-amber-700 max-w-2xl mx-auto text-sm sm:text-base">
              Explore our collection of prasad from India's most revered temples. Each offering is prepared with devotion and tradition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {temples.map(temple => (
              <motion.div
                key={temple.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100"
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={temple.image} 
                    alt={temple.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg sm:text-xl font-bold text-amber-900">{temple.name}</h3>
                    <button 
                      onClick={() => toggleFavorite(temple.id)}
                      className={`text-xl ${favorites.includes(temple.id) ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
                    >
                      <FaHeart />
                    </button>
                  </div>
                  <p className="text-amber-700 text-xs sm:text-sm mt-1">{temple.location}</p>
                  <div className="mt-3 sm:mt-4">
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={addToCart}
                      className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 py-1 sm:py-2 rounded-lg font-medium flex items-center justify-center text-sm sm:text-base"
                    >
                      <Link to="/order" className="flex items-center px-4 py-2 text-Black rounded">
                        <FaShoppingCart className="mr-2" /> Buy Prasad
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prasad Products */}
      <section className="py-12 sm:py-16 bg-amber-50 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-3 sm:mb-4">Divine Prasad Offerings</h2>
            <p className="text-amber-700 max-w-2xl mx-auto text-sm sm:text-base">
              Authentic temple prasad delivered to your doorstep. Experience blessings from sacred shrines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {prasadItems.map(item => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-r from-amber-200 to-amber-100 flex items-center justify-center overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-300 to-amber-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                    <FaShoppingCart className="text-white text-xl sm:text-2xl" />
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-amber-900">{item.name}</h3>
                      <p className="text-xs sm:text-sm text-amber-700">{item.temple}</p>
                    </div>
                    <button 
                      onClick={() => toggleFavorite(item.id)}
                      className={`text-xl ${favorites.includes(item.id) ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
                    >
                      <FaHeart />
                    </button>
                  </div>
                  
                  <div className="flex items-center mt-2 sm:mt-3">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(item.rating) ? 'fill-current' : 'text-gray-300'} />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 ml-2">{item.rating}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3 sm:mt-4">
                    <div className="flex items-center">
                      <FaRupeeSign className="text-amber-600 text-sm sm:text-base" />
                      <span className="font-bold text-base sm:text-lg text-amber-900">{item.price}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={addToCart}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg flex items-center text-sm sm:text-base"
                    >
                      <Link to="/Order" className="flex items-center px-4 py-2  text-white rounded ">
                        <FaShoppingCart className="mr-1 sm:mr-2" /> Buy
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-3 sm:mb-4">Devotee Experiences</h2>
            <p className="text-amber-700 max-w-2xl mx-auto text-sm sm:text-base">
              Hear from thousands of devotees who have received blessings through our authentic temple prasad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-amber-100"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center text-white font-bold">RK</div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="font-bold text-sm sm:text-base">Rajesh Kumar</h4>
                  <div className="flex text-amber-500">
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm">
                "Receiving Tirupati Laddus at home felt like a blessing. The quality was exceptional, and the packaging preserved the freshness perfectly."
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-amber-100"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center text-white font-bold">PS</div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="font-bold text-sm sm:text-base">Priya Sharma</h4>
                  <div className="flex text-amber-500">
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm">
                "The Ram Mandir Laddu brought tears to my eyes. It tasted exactly like what we get at the temple. Thank you for this divine service!"
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-amber-100"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center text-white font-bold">AS</div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="font-bold text-sm sm:text-base">Amit Singh</h4>
                  <div className="flex text-amber-500">
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                    <FaStar className="text-sm sm:text-base" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm">
                "As someone who can't travel to Kedarnath, receiving the prasad at home was truly special. The delivery was prompt and the prasad was fresh."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-amber-100 to-white px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-3 sm:mb-4">How It Works</h2>
            <p className="text-amber-700 max-w-2xl mx-auto text-sm sm:text-base">
              Getting divine temple prasad delivered to your home is simple and convenient
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-md"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white font-bold text-xl sm:text-2xl">1</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-amber-900 mb-1 sm:mb-2">Choose Temple</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Select from our collection of famous temples</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-md"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white font-bold text-xl sm:text-2xl">2</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-amber-900 mb-1 sm:mb-2">Select Prasad</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Browse and choose from authentic prasad offerings</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-md"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white font-bold text-xl sm:text-2xl">3</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-amber-900 mb-1 sm:mb-2">Place Order</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Complete your purchase with secure payment</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-md"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white font-bold text-xl sm:text-2xl">4</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-amber-900 mb-1 sm:mb-2">Receive Blessings</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Get authentic prasad delivered to your doorstep</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;




