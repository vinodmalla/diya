import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../logo3.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='p-2 bg-green-300 flex items-center justify-between relative'>
      <div className='flex'>
        <Link to="/">
          <img className='w-36 md:w-48' src={logo} alt='diya' />
        </Link>
        <h1 className='md:mt-10 p-0  text-lg font-semibold md:text-2xl md:font-bold'>Diya Helping Hands <br/> Charitable Trust</h1>
      </div>

      {/* Menu Toggle Button */}
      <div className='md:hidden z-50'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className='m-1' size={40} /> : <Menu size={40} />}
        </button>
      </div>
      <div className={`absolute md:static top-0 left-0 w-full md:w-auto text-xs md:text-xl bg-white md:bg-transparent md:flex transition-all duration-300 shadow-md md:shadow-none ${isOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 text-gray-500 text-lg font-semibold'>
          <li className='p-2 hover:underline'><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li className='p-2 hover:underline'><Link to="/services" onClick={() => setIsOpen(false)}>Our Services</Link></li>
          <li className='p-2 hover:underline'><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          <li className='p-2 hover:underline'><Link to="/donate" onClick={() => setIsOpen(false)}>Donate Us</Link></li>
        </ul>
      </div>
    </div>
  );
}
