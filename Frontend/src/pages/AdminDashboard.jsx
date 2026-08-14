import {React, useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_BACKEND_URL;

const AdminDashboard = () => {
    const navigate = useNavigate();

    const [quotes, setQuotes] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchQuotes = async () => {

            try {

                const response = await axios.get(
                    `${API_URL}/api/admin/quotes`,
                    { withCredentials: true }
                );

                setQuotes(response.data.quotes);

            } catch (error) {

                console.error("Error fetching quotes:", error);

                setError(
                    error.response?.data?.message ||
                    "Failed to fetch quotes(axios)"
                );

            } 
        };

        fetchQuotes();

    }, []);

    const handleLogout = async () => {
        
        await axios.post(`${API_URL}/api/admin/logout`, 
            {},
            { withCredentials: true}
        )
        .then(() => {
            navigate("/admin-portal/login")
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">

                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Aeronex Admin
                        </h1>

                        <p className="text-sm text-gray-500 mt-1">
                            Quotation Management
                        </p>
                    </div>

                    <div className='flex justify-center gap-8'>
                        <div className="text-sm text-gray-600 rounded-xl p-2">
                            Admin
                        </div>
                        <div 
                            onClick={handleLogout}
                            className="text-sm bg-red-600 text-blue-50 rounded-xl p-2 ">
                            Logout
                        </div>
                    </div>

                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Dashboard Heading */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Dashboard
                    </h2>

                    <p className="text-gray-500 mt-1">
                        View quotation requests submitted by customers.
                    </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

                    <div className="bg-white rounded-2xl border border-gray-500 p-6 shadow-sm">
                        <p className="text-sm text-gray-500">
                            Total Quotations
                        </p>

                        <h3 className="text-3xl font-bold text-gray-900 mt-2">
                            {quotes.length}
                        </h3>
                    </div>

                </div>

                {error && (
                    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                    </div>
                )}

                {/* Quotations */}
                <div className="bg-white rounded-2xl border border-gray-500 shadow-sm overflow-hidden">

                    {/* Section Header */}
                    <div className="px-6 py-5 border-b border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Quote Requests
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Customer quotation submissions
                        </p>
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">

                        <table className="w-full text-left">

                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Customer
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Company
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Contact
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        City
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Pincode
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Reason
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Message
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">

                                {quotes.map((quote) => (
                                    <tr
                                        key={quote._id}
                                        className="hover:bg-gray-50"
                                    >

                                        {/* Customer */}
                                        <td className="px-6 py-5">
                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    {quote.fullName}
                                                </p>

                                                {/* <p className="text-xs text-gray-400 mt-1">
                                                    ID: {quote._id}
                                                </p> */}
                                            </div>
                                        </td>

                                        {/* Company */}
                                        <td className="px-6 py-5 text-sm text-gray-700">
                                            {quote.companyName}
                                        </td>

                                        {/* Contact */}
                                        <td className="px-6 py-5">
                                            <p className="text-sm text-gray-700">
                                                {quote.email}
                                            </p>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {quote.phoneNumber}
                                            </p>
                                        </td>

                                        {/* City */}
                                        <td className="px-6 py-5 text-sm text-gray-700">
                                            {quote.city}
                                        </td>

                                        <td className="px-6 py-5 text-sm text-gray-700">
                                            {quote.pincode}
                                        </td>

                                        {/* Reason */}
                                        <td className="px-6 py-5 text-sm font-medium text-gray-700">                              
                                            {quote.reason}                                           
                                        </td>

                                        {/* Message */}
                                        <td className="px-6 py-5 text-sm text-gray-600 min-w-55">
                                            {quote.message}
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden divide-y divide-gray-200">

                        {quotes.map((quote) => (
                            <div
                                key={quote._id}
                                className="p-5"
                            >

                                <div className="flex flex-col justify-between items-start gap-4 mb-4">

                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            {quote.fullName}
                                        </h4>

                                        <p className="text-sm text-gray-500 mt-1">
                                            {quote.companyName}
                                        </p>
                                    </div>

                                    

                                </div>

                                <div className="space-y-2 text-sm">

                                    <p>
                                        <span className="font-medium text-gray-700">
                                            Email:
                                        </span>{" "}
                                        {quote.email}
                                    </p>

                                    <p>
                                        <span className="font-medium text-gray-700">
                                            Phone:
                                        </span>{" "}
                                        {quote.phoneNumber}
                                    </p>

                                    <p>
                                        <span className="font-medium text-gray-700">
                                            City:
                                        </span>{" "}
                                        {quote.city}
                                    </p>
                                    <p>
                                        <span className="font-medium text-gray-700">
                                            Pincode:
                                        </span>{" "}
                                        {quote.pincode}
                                    </p>
                                    <p>
                                        <span className="font-medium text-gray-700">
                                            Reason:
                                        </span>{" "}
                                        {quote.reason}
                                    </p>

                                    <div className="pt-2">
                                        <p className="font-medium text-gray-700">
                                            Message:
                                        </p>

                                        <p className="text-gray-600 mt-1">
                                            {quote.message}
                                        </p>
                                    </div>

                                </div>

                                {/* <p className="text-xs text-gray-400 mt-4 break-all">
                                    ID: {quote._id}
                                </p> */}

                            </div>
                        ))}

                    </div>

                </div>

            </main>

        </div>
    );
};

export default AdminDashboard;


