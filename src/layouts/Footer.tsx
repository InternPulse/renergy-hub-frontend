import React from "react";

const Footer: React.FC = () => {
  return (
    // <div className="bg-green-800 text-white">
      <footer className="w-full bg-green-800 text-white px-8 py-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold text-center md:text-left">
          Leading renewable energy solution provider in the world
        </h1>
        <button className="bg-white text-green-800 px-5 py-2 rounded-md mt-6 md:mt-0">
          Contact Us
        </button>
      </div>

      <hr className="border-gray-300 my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Column 1 */}
        <div>
          <h2 className="font-bold text-lg mb-4">Renergy</h2>
          <p>Your go-to brand for standard products.</p>
          <p>With full support from our dedicated team</p>
          <p className="mt-4">
            Join our community of satisfied customers who are making a
            difference.
          </p>
          <button className="bg-white text-green-800 px-5 py-2 rounded-md mt-4">
            Subscribe
          </button>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-2">
            <li>Solar Panels</li>
            <li>Wind Turbines</li>
            <li>Storage</li>
            <li>Maintenance</li>
            <li>Strategy Development</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-2">
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Contact Us</li>
            <li>Customer Support</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Security Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 my-8" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>C 2024 Renergy Hub. All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="bg-white text-green-800 p-2 rounded-full">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="bg-white text-green-800 p-2 rounded-full">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="bg-white text-green-800 p-2 rounded-full">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
    // </div>
  );
};

export default Footer;
