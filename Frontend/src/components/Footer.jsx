import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { footerLinks } from '../data/Content'

const Footer = () => {
  return (
    <footer className='px-6 mt-8 bg-black/10'>
        <div className='flex flex-col md:flex-row justify-between px-10 py-10 max-sm:p-5 gap-5 '>
            <div>
                <Link to="/home" className="flex items-center py-2 ">
                    <div className=" ml-8 max-sm:m-2">
                        <img
                            src={logo}
                            alt="Aeronex logo"
                            className="w-38 cursor-pointer rounded"
                         />
                    </div>
                </Link>
                <p className='text-gray-600 max-w-115 mt-6'>We deliver Air Curtain to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>
            </div>

            <div className='flex flex-wrap justify-between w-full md:w-[45%] mr-10 gap-5 '>
                {footerLinks.map((section, id) => (
                    <div key={id}>
                        <h3 className='font-bold text-base text-gray-900 mb-2'>{section.title}</h3>
                        <ul className='text-sm'>
                            {section.links.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className='text-gray-600 hover:underline transition' >{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex flex-col justify-start px-10 py-10 max-sm:p-5 border-b">
            
            <h3 className='text-base font-bold text-gray-900'>Registered Office Address</h3>
            <p className='text-sm text-gray-600 pb-3' >Address: Noida, Plot & Industrial Area, Sector 57, Noida, UP-201301</p>
            
            <p className='text-sm text-gray-600 pb-3 hover:underline hover:text-blue-500'>Phone no: +91-9599268852</p>
            <p className='text-sm text-gray-600 pb-3 hover:underline hover:text-blue-500'>Email: aeronex-in@gmail.com</p>
        </div>
        <p className='text-center text-sm md:text-base text-gray-600 py-5'>
            Copyright {new Date().getFullYear()} © Aeronex Innovations Pvt. Ltd. | All Right Reserved.
        </p>
    </footer>
  )
}

export default Footer