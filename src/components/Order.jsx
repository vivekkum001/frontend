import React, { useEffect, useState } from 'react';
import qrCodeImage from '../assets/qrphone.jpg';
import qrCodeImage2 from '../assets/qrphone.jpg';

function Profile() {
  const [user, setUser] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [timer, setTimer] = useState(0);
  const [selectedPrasadType, setSelectedPrasadType] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    pincode: '',
    city: 'Bihar Sharif',
    district: 'Nalanda',
    state: 'Bihar',
    temple: '',
    amount: '351',
    paymentRefNo: ''
  });

  // Load user data if present in localStorage (optional, no redirect)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setFormData(prev => ({
        ...prev,
        fullName: storedUser.name || '',
        email: storedUser.email || '',
        mobile: storedUser.mobile || ''
      }));
    }
  }, []);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0 && showQRCode) {
      setShowQRCode(false);
      setShowForm(true);
    }
    return () => clearInterval(interval);
  }, [timer, showQRCode]);

  const handlePrasadSelection = (type) => {
    const amount = type === 'normal' ? '351' : '551';
    setSelectedPrasadType(type);
    setShowQRCode(true);
    setShowForm(false);
    setTimer(60);
    setFormData({
      ...formData,
      amount: amount
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage('');

    if (!formData.temple) {
      alert('Please select a temple');
      setIsSubmitting(false);
      return;
    }

    if (!formData.paymentRefNo.trim()) {
      alert('Please enter payment reference number, UTR no, Transaction id no');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://backendofprasadseva-1.onrender.com/api/purchase-prasad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          prasadType: selectedPrasadType === 'normal' ? 'Normal Prasad' : 'Special Prasad'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionMessage(data.msg);
        setTimeout(() => {
          setShowForm(false);
          setSelectedPrasadType(null);
          setSubmissionMessage('');
        }, 3000);
      } else {
        setSubmissionMessage(`Error: ${data.msg}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionMessage('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#138808] p-6">
      <h1 className="text-3xl font-bold mb-4 font-['Orbitron'] text-saffron-800">Your Profile</h1>

      <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md mb-6">
        <p className="text-xl font-['Orbitron'] mb-2 text-gray-800">
          Username: <span className="text-green-700">{user?.name || "Guest User"}</span>
        </p>
        <p className="text-xl font-['Orbitron'] mb-2 text-gray-800">
          Email: <span className="text-green-700">{user?.email || "Not Available"}</span>
        </p>
        <p className="text-xl font-['Orbitron'] mb-2 text-gray-800">
          <span className="text-green-700">{user?.mobile || "Not Available"}</span>
        </p>
      </div>

      {/* Prasad Sections */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Normal Prasad */}
        <div 
          className={`flex-1 bg-white bg-opacity-90 p-6 rounded-xl shadow-md cursor-pointer border-2 ${selectedPrasadType === 'normal' ? 'border-[#FF9933]' : 'border-gray-300'}`}
          onClick={() => handlePrasadSelection('normal')}
        >
          <h2 className="text-2xl font-bold font-['Orbitron'] mb-4 text-center text-[#FF9933]">
            Normal Prasad
          </h2>
          <div className="text-center text-xl mb-4">
            <span className="text-green-700">₹251</span>
          </div>
          {selectedPrasadType === 'normal' && showQRCode && (
            <div className="text-center">
              <p className="mb-2 text-[#FF9933] font-bold">Scan QR Code - Time left: {timer}s</p>
              <div className="bg-white p-2 rounded inline-block mb-4">
                <img src={qrCodeImage2} alt="QR Code" className="w-48 h-48" />
              </div>
            </div>
          )}
        </div>

        {/* Special Prasad */}
        <div 
          className={`flex-1 bg-white bg-opacity-90 p-6 rounded-xl shadow-md cursor-pointer border-2 ${selectedPrasadType === 'special' ? 'border-[#FF9933]' : 'border-gray-300'}`}
          onClick={() => handlePrasadSelection('special')}
        >
          <h2 className="text-2xl font-bold font-['Orbitron'] mb-4 text-center text-[#FF9933]">
            Special Prasad
          </h2>
          <div className="text-center text-xl mb-4">
            <span className="text-green-700">₹501</span>
          </div>
          {selectedPrasadType === 'special' && showQRCode && (
            <div className="text-center">
              <p className="mb-2 text-[#FF9933] font-bold">Scan QR Code - Time left: {timer}s</p>
              <div className="bg-white p-2 rounded inline-block mb-4">
                <img src={qrCodeImage} alt="QR Code" className="w-48 h-48" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Form Section */}
      {showForm && (
        <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold font-['Orbitron'] mb-4 text-center text-[#FF9933]">
            {selectedPrasadType === 'normal' ? 'Normal' : 'Special'} Prasad Details
          </h2>

          {submissionMessage ? (
            <div className={`text-center py-6 ${submissionMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
              <p className="text-xl font-bold">{submissionMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 max-w-2xl mx-auto">
              {/* Form Fields */}
              {/* (kept same as your code) */}
              {/* ... */}
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
