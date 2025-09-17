import React, { useEffect, useState } from 'react';
import qrCodeImage from '../assets/351.jpg';
import qrCodeImage2 from '../assets/551.jpg';

function Profile() {
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
    setTimer(90);
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
      <h1 className="text-3xl font-bold mb-6 font-['Orbitron'] text-saffron-800 text-center">
        Prasad Seva
      </h1>

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
            <span className="text-green-700">₹351</span>
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
            <span className="text-green-700">₹551</span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleFormChange} 
                    required 
                    className="w-full px-4 py-2 rounded border border-gray-300 text-gray-700" 
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="mobile" 
                    value={formData.mobile} 
                    onChange={handleFormChange} 
                    required 
                    className="w-full px-4 py-2 rounded border border-gray-300 text-gray-700" 
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Email ID</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleFormChange} 
                    required 
                    className="w-full px-4 py-2 rounded border border-gray-300 text-gray-700" 
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Pincode</label>
                  <input 
                    type="text" 
                    name="pincode" 
                    value={formData.pincode} 
                    onChange={handleFormChange} 
                    required 
                    className="w-full px-4 py-2 rounded border border-gray-300 text-gray-700" 
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-gray-700">Full Address</label>
                <textarea 
                  name="address" 
                  value={formData.address} 
                  onChange={handleFormChange} 
                  required 
                  className="w-full px-4 py-2 rounded border border-gray-300 text-gray-700" 
                  rows="3" 
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700">Select Temple</label>
                <select 
                  name="temple" 
                  value={formData.temple} 
                  onChange={handleFormChange} 
                  required 
                  className="w-full px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white"
                >
                  <option value="">-- Select a Temple --</option>
                  <option value="Kashi Vishwanath">Kashi Vishwanath</option>
                  <option value="Khatushyam">Khatushyam</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700">Amount</label>
                  <input 
                    type="text" 
                    name="amount" 
                    value={formData.amount} 
                    readOnly 
                    className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-100 text-gray-700" 
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Payment Ref No</label>
                  <input 
                    type="text" 
                    name="paymentRefNo" 
                    value={formData.paymentRefNo} 
                    onChange={handleFormChange} 
                    required 
                    placeholder="Enter Ref No" 
                    className="w-full px-4 py-2 rounded border border-gray-300 text-gray-700" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700">City</label>
                  <input 
                    type="text" 
                    name="city" 
                    value={formData.city} 
                    readOnly 
                    className="w-full px-4 py-2 rounded bg-gray-100 text-gray-700" 
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">District</label>
                  <input 
                    type="text" 
                    name="district" 
                    value={formData.district} 
                    readOnly 
                    className="w-full px-4 py-2 rounded bg-gray-100 text-gray-700" 
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">State</label>
                  <input 
                    type="text" 
                    name="state" 
                    value={formData.state} 
                    readOnly 
                    className="w-full px-4 py-2 rounded bg-gray-100 text-gray-700" 
                  />
                </div>
              </div>

              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`bg-[#FF9933] hover:bg-[#E88B2D] px-6 py-3 rounded font-bold text-lg text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Processing...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;


