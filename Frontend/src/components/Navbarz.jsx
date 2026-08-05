import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

const Navbarz = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 py-4 bg-white shadow-md">
        <nav className="max-w-310 mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 font-heading font-extrabold text-xl text-navy"
          >
            <span className="w-8 h-8 rounded-[9px] flex items-center justify-center bg-linear-to-br from-navy via-royal to-teal">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                className="w-5 h-5 stroke-white"
              >
                <path d="M3 8h13a3 3 0 1 0-3-3" />
                <path d="M3 14h17a3 3 0 1 1-3 3" />
                <path d="M3 20h10" />
              </svg>
            </span>
            Aeronex
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-navy group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold border border-gray-300 text-navy hover:border-navy transition-all"
            >
              Contact
            </a>

            <a
              href="#quote"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-amber-500 bg-linear-to-r from-royal to-teal"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="w-6 h-6 stroke-navy" />
            ) : (
              <Menu className="w-6 h-6 stroke-navy" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-navy z-110 flex flex-col items-start justify-center gap-7 p-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white font-heading font-semibold text-2xl"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-linear-to-r from-royal to-teal"
          >
            Request Quote
          </a>
        </div>
      )}
    </>
  );
}

export default Navbarz