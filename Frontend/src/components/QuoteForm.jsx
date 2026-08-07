import React from 'react'

const QuoteForm = ({onCloseQuote}) => {
  

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
        <form className="space-y-6 flex-1 overflow-y-auto scrollbar-none">

          {/* Name + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Your Name
              </label>

              <input
                type="text"
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
                required
                placeholder="City"
                className="w-full rounded-xl border border-gray-200 bg-indigo-50/30 px-4 py-3 outline-none focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Reason for Contact
              </label>

              <select className="w-full rounded-xl border border-gray-200 bg-indigo-50/30 px-4 py-3 outline-none">
                <option>Request a Quote</option>
                <option>Product Enquiry</option>
                <option>Other</option>
              </select>
            </div>

          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              Message
            </label>

            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full rounded-lg border border-gray-200 bg-green-50/30 px-4 py-3 outline-none resize-none focus:border-green-600"
            />
          </div>
        </form>  

        {/* Submit */}
        <div className="flex justify-start mt-4">
          <button
            type="submit"
            onClick = {() => onCloseQuote?.()}
            className=" rounded-xl bg-indigo-500 px-10 py-3 font-semibold text-white hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </div>
        
      </div>
    </div>
  );
}
  


export default QuoteForm