"use client"; // This ensures the file is treated as a Client Component
import { motion } from "framer-motion";
import React, { useState } from "react"; // Import useState
import { FaFacebook, FaTwitter,FaEnvelope,FaYoutube,FaMapMarkerAlt,FaPhone,FaInstagram } from 'react-icons/fa';
import { Search } from "lucide-react";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; // Importing dropdown arrow icon


export default function  Home() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="relative min-h-screen bg-white text-white">
       <header className="fixed top-0 left-0 w-full bg-white text-black  z-50">
      

      {/* Navbar Content */}
      <div className="relative container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold">Drinking Water</h1>

        {/* Centered Navigation Bar */}
        <div className="flex-grow flex justify-center">
          <nav className="flex space-x-8 text-lg font-semibold">
            {/* Navigation Links */}
    <ul className="flex space-x-4">
    


          
 {/* Home Dropdown */}
 <li className="relative">
            <button
              onClick={() => toggleDropdown("home")}
              className="flex items-center gap-1 px-4 py-2 text-gray-800 transition hover:text-blue-600 group focus:outline-none"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === "home" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {openDropdown === "home" && (
              <ul className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg">
                {["Gallery", "Explore"].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Page Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("page")}
              className="flex items-center gap-1 px-4 py-2 text-gray-800 transition hover:text-blue-600 group focus:outline-none"
            >
              Page
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === "page" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {openDropdown === "page" && (
              <ul className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg">
                {["About", "Services", "Gallery"].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
      {/* contact Dropdown */}
    <li className="relative">
            <button
              onClick={() => toggleDropdown("contact")}
              className="flex items-center gap-1 px-4 py-2 text-gray-800 transition hover:text-blue-600 group focus:outline-none"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === "contact" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {openDropdown === "contact" && (
              <ul className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg">
                {["Email", "Phone", "Location"].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
{/* Login Dropdown */}
<li className="relative">
            <button
              onClick={() => toggleDropdown("home")}
              className="flex items-center gap-1 px-4 py-2 text-gray-800 transition hover:text-blue-600 group focus:outline-none"
            >
              Login
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              
            </button>

            
          </li>
{/* Register Dropdown */}
<li className="relative">
            <button
              onClick={() => toggleDropdown("home")}
              className="flex items-center gap-1 px-4 py-2 text-gray-800 transition hover:text-blue-600 group focus:outline-none"
            >
              Register
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
             
            </button>

            
          </li>
    </ul>
    {/* Search Icon */}
    <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-200 transition">
          <Search className="w-5 h-5 text-blue-600" />
        </button>
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

      <main className="relative overflow-hidden">
  {/* Background Image */}
  <div className="relative mx-auto w-full h-screen">
  <div 
  className="relative flex items-center justify-center h-screen  px-6 md:px-16"
  style={{ backgroundImage: "url('/images/bb1.png')", backgroundSize: "cover", backgroundPosition: "center" }}
>
  

  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
    {/* Text Section */}
    <div className="space-y-6 text-center md:text-left text-white">
      <motion.h2
        className="text-4xl md:text-6xl text-black font-extrabold transition-all duration-500 hover:text-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Always Want Safe <br /> And Good Water
      </motion.h2>
      <motion.p
        className="text-lg md:text-2xl transition-opacity text-black duration-700 hover:opacity-80"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        Experience the purity of drinking water.
        <div className="flex justify-center mt-6">
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-blue-400 hover:to-blue-900">
  Explore Now
</button>

</div>
      </motion.p>
      
      
    </div>
    {/* Image Section */}
    <div className="absolute top-[60%] flex justify-center w-full">
        <img
          src="/images/drink.png" // Replace with the actual image path
          alt="Background"
          className="w-[100%] md:w-[80%] lg:w-[54%] h-[90%] object-cover"
        />
      </div>

    {/* Image Section */}
    <motion.div
      className="flex justify-center md:justify-end"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <img
  src="/images/splash.webp" // Ensure the image path is correct
  alt="Water Splash"
  className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto object-cover"
/>

    </motion.div>
  </div>
</div>

</div>

        

        {/* Another Section */}
        <div className="bg-white py-16">
      {/* Outer Container */}
      <div className="container mx-auto px-6 lg:px-20">
        {/* Inner Container for Section Title */}
        <div className="bg-white py-16">
      {/* Unified Outer Container */}
      <div className="container mx-50 py-24 px-8 lg:px-20 bg-gray-100 rounded-lg shadow-lg p-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            A Trusted Name In Bottled Water Industry
          </h2>
          <p className="text-gray-600 mt-4">
            Discover the best water solutions for your health and well-being with our expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-blue-500 text-5xl">💧</div>
            <h3 className="text-xl font-semibold text-blue-900">Maximum Purity</h3>
            <p className="text-gray-600">
             water that is safe to drink and can be consumed in liquid form or through food
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-blue-500 text-5xl">👐</div>
            <h3 className="text-xl font-semibold text-blue-900">Chlorine Free</h3>
            <p className="text-gray-600">
            A reverse osmosis (RO) system can remove chlorine and other contaminants. 
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-blue-500 text-5xl">♻️</div>
            <h3 className="text-xl font-semibold text-blue-900">5 Steps Filtration</h3>
            <p className="text-gray-600">
            a sediment pre-filter, carbon pre-filter, and a reverse osmosis membrane are necessary for basic filtration.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

 {/* Another Section */}
 <section className="py-12 bg-white">
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-1">
    {/* Image Section */}
    <div className="w-full md:w-1/2">
      <div className="relative w-full h-full">
        <img
          src="/images/botttle.avif" // Path to your image
          alt="bottle"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 text-right">
    <div>
  {/* Section Title */}
  <h2 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight text-left">
    We Always Want Safe <br /> and Healthy Water for <br /> Healthy Life.
  </h2>
  <p className="text-gray-700 mt-4 text-lg md:text-xl text-left">
  Drinking water is absolutely vital for human health, acting as the foundation for all bodily functions by keeping us hydrated and ensuring our organs operate properly; it aids in digestion, nutrient absorption, waste removal through perspiration and urination, and helps regulate body temperature, making it a crucial element for maintaining overall well-being and preventing numerous health issues like constipation and kidney stones; consistently drinking sufficient water can also contribute to healthy skin and improved mental clarity. 
  </p>
  <div className="flex justify-center mt-6">
  <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-900">
    Read More
  </button>
</div>
</div>

    </div>
  </div>
</section>
  <section>
  <div className="relative mx-auto w-full h-screen">
    {/* Background Image */}
    <img
      src="/images/bbg1.webp" // Replace with the actual image path
      alt="Background"
      className="w-full h-[900px] object-cover"
    />

    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-between px-8 md:px-16 h-screen">
      {/* Text Section */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white text-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-black whitespace-nowrap">
          Protect Your Family with Best Water<br /> Filtering System Services
        </h2>
      </div>

     {/* Card 1 */}
  <div className="absolute top-[25%] left-[35%] transform -translate-x-1/2 bg-white shadow-md rounded-lg p-6 text-center min-h-[200px] bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
    <img src="/images/co2.jpg" alt="Residential Waters" className="mx-auto mb-4 h-12" />
    <h3 className="text-xl font-bold text-blue-900">Residential Waters</h3>
    <p className="text-gray-600 mt-2">water that is safe to drink and can be <br/>consumed in liquid form or through food.</p>
  </div>

  {/* Card 2 */}
  <div className="absolute top-[25%] right-1/4 transform translate-x-1/2 bg-white shadow-md rounded-lg p-6 text-center min-h-[200px] bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
    <img src="/images/co1.jpg" alt="Commercial Waters" className="mx-auto mb-4 h-12" />
    <h3 className="text-xl font-bold text-blue-900">Commercial Waters</h3>
    <p className="text-gray-600 mt-2">water that is safe to drink and can be <br/>consumed in liquid form or through food.</p>
  </div>

  {/* Card 3 */}
  <div className="absolute bottom-[10%] left-1/4 transform -translate-x-1/2 bg-white shadow-md rounded-lg p-6 text-center min-h-[200px] bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
    <img src="/images/co4.jpg" alt="Filtration Plants" className="mx-auto mb-4 h-12" />
    <h3 className="text-xl font-bold text-blue-900">Filtration Plants</h3>
    <p className="text-gray-600 mt-2"> process that removes unwanted substances from water,<br/> such as bacteria, viruses, chemicals, and sediment.</p>
  </div>

  {/* Card 4 */}
  <div className="absolute bottom-[10%] right-[15%] transform translate-x-1/2 bg-white shadow-md rounded-lg p-6 text-center min-h-[200px] bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
    <img src="/images/co3.jpg" alt="Water Softening" className="mx-auto mb-4 h-12" />
    <h3 className="text-xl font-bold text-blue-900">Water Softening</h3>
    <p className="text-gray-600 mt-2">Water softening is a process that removes calcium. </p>
  </div>

      {/* Image Section */}
      <div className="absolute bottom-0 flex justify-center w-full">
        <img
          src="/images/man_carry.png" // Replace with the actual image path
          alt="Background"
          className="w-[90%] md:w-[80%] lg:w-[40%] h-auto object-cover"
        />
      </div>
    </div>
  </div>
</section>

{/* Another Section */}


<section className="py-12 bg-gray-100">
  <div className="container mx-auto text-center">
    <p className="text-2xl md:text-3xl font-bold text-black mb-2">
    We Deliver Best Quality
    Bottle Packs.
    </p>
    <p className="text-lg text-orange-200 font-bold mb-6">
    <br/>
    </p>
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
        <div className="flex items-center justify-center mb-4">
          <img src="/images/1l.png" alt="200ml Icon" className="h-40 w-40" />
        </div>
        <h3 className="text-2xl font-semibold text-indigo-800 mb-2">1L</h3>
        <p className="text-gray-700">
         1000ml of filtered water.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
        <div className="flex items-center justify-center mb-4">
          <img src="/images/2l.png" alt="500ml Icon" className="h-40 w-40" />
        </div>
        <h3 className="text-2xl font-semibold text-indigo-800 mb-2">2L</h3>
        <p className="text-gray-700">
        2000ml of filtered water.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
        <div className="flex items-center justify-center mb-4">
          <img src="/images/20l.jpg" alt="1L Icon" className="h-40 w-40" />
        </div>
        <h3 className="text-2xl font-semibold text-indigo-800 mb-2">20L</h3>
        <p className="text-gray-700">
        20000ml of filtered water.
        </p>
      </div>

      

      {/* Card 5 */}
      
    </div>
  </div>
</section>

 {/* Another Section */}
 <section className="py-5 bg-white">
 <div className="container mx-auto text-center">
    <p className="text-2xl md:text-3xl font-bold text-black mb-2">
    Gallery<br/>
    <br/>
    </p>
    </div>
  <div className="container mx-auto text-center max-w-7xl px-4 md:px-6 lg:px-8">
    {/* Example of Success Stories */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
      <div className="relative w-full h-[300px] mb-8">
        <img
          src="/images/co1.jpg" // Path to your image
          alt="gym"
          className="rounded-md w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full h-[300px] mb-8">
        <img
          src="/images/co2.jpg" // Path to your image
          alt="gym"
          className="rounded-md w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full h-[300px] mb-8">
        <img
          src="/images/co3.jpg" // Path to your image
          alt="gym"
          className="rounded-md w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full h-[300px] mb-8">
        <img
          src="/images/co4.jpg" // Path to your image
          alt="gym"
          className="rounded-md w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>



      </main>
      <section id="contact">
  <footer
    className="text-white py-10 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/foooter.jpg')" }}
  >
    <div className="container mx-auto px-6">
      {/* Top Contact Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-red-500 text-3xl" />
          <p>Mookkanoor, Angamaly</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <FaPhone className="text-red-500 text-3xl" />
          <p>5864257615 | 9954786314</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <FaEnvelope className="text-red-500 text-3xl" />
          <p>Support.watercenter@gmail.com</p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-3xl font-bold text-blue-500">WATER</h2>
          <p className="mt-4 text-gray-200">
          Water is a basic need for life on Earth. 
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaYoutube className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold">Useful Links</h3>
          <ul className="mt-4 space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Classes</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-bold">Support</h3>
          <ul className="mt-4 space-y-2">
            <li>Login</li>
            <li>My Account</li>
            <li>Subscribe</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Tips & Guides */}
        <div>
          <h3 className="text-xl font-bold">Tips & Guides</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <p className="font-semibold">Water may help prevent depression, anxiety</p>
              <p className="text-gray-400 text-sm">3 min read | 20 Comments</p>
            </li>
            <li>
              <p className="font-semibold">Water is a limited resource, and not all of it is safe to drink.</p>
              <p className="text-gray-400 text-sm">3 min read | 20 Comments</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        Copyright &copy; 2025 All rights reserved | This page is made by Abhijith
      </div>
    </div>
  </footer>
</section>

    </div>
  );
}
