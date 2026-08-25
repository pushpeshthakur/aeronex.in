import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { ArrowRight } from "lucide-react";
import { navLinks } from "../data/Content";
import { X, Menu } from "lucide-react";
import QuoteForm from "./QuoteForm";



const Navbar = ({ onOpenQuote }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setOpen(false);
    navigate(path);
  };

  

  return (
    <>
      <header className="w-full h-15  bg-white sticky top-0 z-20 ">
      <nav className="w-full h-full border flex items-center justify-between">
        <Link to="/home" className="flex items-center py-2 ">
          <div className=" ml-8 ">
            <img
              src={logo}
              alt="Aeronex logo"
              className="w-38 cursor-pointer"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-9 ">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="relative text-md font-extrabold text-sm lg:text-lg group border-b-2 border-transparent transition-all duration-200 sm:hover:border-blue-950"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>


        {/* Desktop Button */}
        <div className="flex flex-col justify-center items-end px-2 py-2 m-2 whitespace-nowrap max-sm:hidden">
          <button 
            type='button'
            onClick={() => onOpenQuote?.()}
            className="flex items-center gap-2 whitespace-nowrap rounded-2xl cursor-pointer bg-indigo-600 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-lg">
            
              Request Quote

            <ArrowRight className="w-3.75 h-3.75 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
        </div>

            

        {/* Mobile Menu Button */}
        <button className="md:hidden m-5" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="w-8 h-8 stroke-navy" />
          ) : (
            <Menu className="w-8 h-8 stroke-navy" />
          )}
        </button>
      </nav>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-y-0 right-0 w-4/5 top-15 rounded-2xl bg-indigo-500/60 backdrop-blur-md z-110 flex flex-col items-start justify-center gap-5 p-10 transition-all duration-300 translate-y">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-white font-heading font-semibold text-2xl"
            >
              {link.label}
            </button>
          ))}

          <div className="flex ">
            <button className="flex items-center gap-2 whitespace-nowrap rounded-2xl cursor-pointer bg-indigo-600 px-4 py-2 text-cyan-100">
            <a 
            href="#quote"
            onClick={() => {
              setOpen(false)
              onOpenQuote?.()
            }}
            >
              Request Quote
            </a>
            <ArrowRight className="w-3.75 h-3.75 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
