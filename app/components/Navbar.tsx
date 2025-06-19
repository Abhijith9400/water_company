'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { ChevronDown, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search box on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 500); // Close after 500ms delay
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black z-50 ">
      <div className="relative container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold">Drinking Water</h1>

        {/* Navigation */}
        <div className="flex-grow flex justify-center">
          <nav className="flex space-x-8 text-lg font-semibold">
            <ul className="flex space-x-4 items-center">
              {/* Dropdown Menus */}
              {[
                {
                  label: 'Home',
                  key: 'home',
                  links: [
                    { label: 'Gallery', path: '/gallery' },
                    { label: 'Explore', path: '/explore' },
                  ],
                },
                {
                  label: 'Page',
                  key: 'page',
                  links: [
                    { label: 'About', path: '/about' },
                    { label: 'Services', path: '/services' },
                    { label: 'Gallery', path: '/gallery' },
                  ],
                },
                {
                  label: 'Contact',
                  key: 'contact',
                  links: [
                    { label: 'Email', path: '/contact/email' },
                    { label: 'Phone', path: '/contact/phone' },
                    { label: 'Location', path: '/contact/location' },
                  ],
                },
              ].map(({ label, key, links }) => (
                <li
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center gap-1 px-4 py-2 text-gray-800 transition hover:text-blue-600 cursor-pointer">
                    {label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === key ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                  {openDropdown === key && (
                    <ul className="absolute left-0 mt-2 w-40 bg-white/30 text-black backdrop-blur-md rounded-md shadow-lg z-50 transition-opacity duration-300">
                      {links.map(({ label, path }) => (
                        <li key={label}>
                          <Link
                            href={path}
                            className="block px-4 py-2 hover:bg-white/20 hover:text-blue-300 transition"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Search Icon + Box */}
            <div className="relative ml-4" ref={searchRef}>
              <button
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-200 transition"
                onClick={() => setShowSearch((prev) => !prev)}
              >
                <Search className="w-5 h-5 text-blue-600" />
              </button>

              {showSearch && (
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  autoFocus
                  className="absolute right-0 top-12 w-64 px-4 py-2 rounded-md bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              )}
            </div>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          <FaTwitter className="hover:text-sky-400 cursor-pointer" />
          <FaYoutube className="hover:text-red-600 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
