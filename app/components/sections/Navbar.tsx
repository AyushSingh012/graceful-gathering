'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    
    // If we're on the home page, smooth scroll to section
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // If we're on another page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-serif font-bold text-rose-600">
                Graceful Gathering
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('gallery')}
              className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition duration-300"
            >
              Gallery
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')}
              className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition duration-300"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition duration-300"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-rose-700 transition duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-600 focus:outline-none focus:text-rose-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('gallery')}
                className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-gray-700 hover:text-rose-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;