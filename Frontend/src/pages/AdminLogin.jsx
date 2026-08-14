import { React,  useState } from 'react';
import axios from 'axios';
import logoName from '../assets/logoName.png';
import AdminDashboard from './AdminDashboard';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_BACKEND_URL;

const AdminLogin  = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        axios.post(
            `${API_URL}/api/admin/login`,
            { email, password },
            { withCredentials: true }
        )
        .then(() => {
            e.target.reset();
            setEmail('');
            setPassword('');
            navigate("/admin-portal/dashboard")
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <section className="min-h-screen bg-gray-200 flex justify-center items-center p-4">
            <div className="w-full rounded-2xl bg-fuchsia-200/50 p-8">
                
                {/* Logo */}
                <div className='flex justify-center py-2'>
                    <img 
                        src={logoName} 
                        alt="AERONEX"
                        className='h-15 w-28 rounded-2xl ' />
                </div>

                {/* Heading */}
                <div className=' text-center mb-8'>
                    <h1 className='text-xl font-bold text-gray-900'>
                        Admin Portal
                    </h1>
                    <p className='text-gray-600'>
                        Sign in to manage
                    </p>

                {/* Form */}
                <form 
                    onSubmit={handleLogin} 
                    className='flex justify-center items-center flex-col'>

                    <div className='w-full max-w-md'>
                        <label className='block w-full text-left mx-4 p-2 text-sm font-medium text-gray-800'>
                            Email
                        </label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="w-full text-sm rounded-xl border px-4 py-2 outline-none bg-indigo-100/30 focus:border-indigo-500"
                        />              
                    </div>

                    <div className='w-full max-w-md'>
                        <label className='block w-full text-left mx-4 p-2 text-sm font-medium text-gray-800'>
                            Password
                        </label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="w-full  text-sm rounded-xl border px-4 py-2 outline-none bg-indigo-100/30 focus:border-indigo-500 " 
                        />
                    </div>

                    <div className="w-full max-w-md flex justify-start mt-4 ">
                        <button 
                            type="submit"
                            
                            className=" rounded-xl bg-indigo-600 text-white text-bold px-8 py-2 hover:bg-indigo-700">
                            Sign In
                        </button>
                    </div>


                </form>
                </div>
            </div>
        </section>
    )
}

export default AdminLogin