import {React, useState} from 'react';
import axios from 'axios';

const QuoteForm = ({onCloseQuote}) => {
  
  const [formData, setFormData] = useState({
    fullName:'',
    companyName:'',
    email:'',
    phoneNumber:'',
    city:'',
    reason:'',
    pincode:'',
    message:'',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({...prev, [name]: value}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    try{
      const response =await axios.post("http://localhost:3000/api/quote/upload", formData);
      //const response = 
      console.log(response.data)

      setSuccess("Quote request submitted successfully.");

      setFormData({
        fullName:'',
        companyName:'',
        email:'',
        phoneNumber:'',
        city:'',
        reason:'',
        pincode:'',
        message:'',
      });

    } catch (err) {
      console.error("Quote submission error:",err)

      setError(
        error.response?.data?.message ||
        "Failed to submit quote."
      );
    }
  }


  return (
    <div className="fixed inset-y-0 right-0 max-sm:inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">

      {/* Modal */}
      <div className="relative w-110 max-w-2xl max-h-[90vh] max-sm:w-full max-sm:h-full  flex flex-col rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900">
            Request a Quote
          </h2>

          <button
            onClick={() => {onCloseQuote?.()}}
            className="text-gray-500 hover:text-black transition"
          >
            Close
          </button>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className="space-y-6 flex-1 overflow-y-auto scrollbar-none">

          {/* Name + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Your Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="eg. John Doe"
                className="w-full rounded-xl border border-gray-200 bg-indigo-50/30 px-4 py-3 outline-none focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Company Name
              </label>

              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                placeholder="eg. Your Company"
                className="w-full rounded-xl border border-gray-200 bg-indigo-50/30 px-4 py-3 outline-none focus:border-indigo-600"
              />
            </div>

          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="eg. abc@company.com"
              className="w-full rounded-xl border border-gray-200 bg-indigo-50/30 px-4 py-3 outline-none focus:border-indigo-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              Phone Number
            </label>

            <div className="flex gap-3">
              <select className="rounded-xl border border-gray-200 bg-green-50/30 px-4 py-3 outline-none">
                <option>+91</option>
              </select>

              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="Enter phone number"
                className="flex-1 rounded-xl border border-gray-200 bg-indigo-50/30 px-4 py-3 outline-none focus:border-indigo-600"
              />
            </div>
          </div>

          {/* City + Reason */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-800">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="City"
                className="w-full rounded-xl border border-gray-200 bg-indigo-50/30 px-4 py-3 outline-none focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Reason for Contact
              </label>

              <select 
                name="reason"
                required
                value={formData.reason}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-indigo-50/30 px-4 py-3 outline-none">
                <option value="" disabled >Select enquiry type</option>
                <option value="Product enquiry">Product enquiry</option>
                <option value="Request a query">Request a Quote</option>
                <option value="Others">Other</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              Pincode
            </label>

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              placeholder="Pincode"
              className="w-full rounded-xl border border-gray-200 bg-indigo-50/30 px-4 py-3 outline-none focus:border-indigo-600"
              />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Enter your message"
              className="w-full rounded-lg border border-gray-200 bg-blue-50/30 px-4 py-3 outline-none resize-none focus:border-blue-600"
            />
          </div>

          {error && (
            <div className="text-sm mb-6 rounded-xl border text-red-700 border-red-200 bg-red-50 px-4 py-3 ">
              {error}
            </div>
          )}
          
          {success && (
            <div className="text-sm mb-6 rounded-xl border text-green-700 border-green-200 bg-green-50 px-4 py-3" >
              {success}
            </div>
          )}

          {/* Submit */}
          <div className="flex justify-start mt-4">
            <button
              type="submit"
              // onClick = {() => onCloseQuote?.()}
              className=" rounded-xl bg-indigo-500 px-10 py-3 font-semibold text-white hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}
  


export default QuoteForm