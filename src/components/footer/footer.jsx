import React from 'react';
import {
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <a href="mailto:saydullo779@gmail.com" className="hover:underline text-gray-300">saydullo779@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-400" />
              <a href="tel:+998942203989" className="hover:underline text-gray-300">+998 94 220 39 89</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Social</h2>
          <div className="flex gap-6 text-2xl">
            <a href="https://t.me/saydullo" target="_blank" rel="noopener noreferrer" title="Telegram">
              <FaTelegramPlane className="text-[#0088cc] hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://linkedin.com/in/saydullo" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin className="text-[#0077B5] hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://github.com/rahmonovsaydullo" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub className="text-white hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="md:col-span-1 flex items-start md:items-end justify-start md:justify-end text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Saydullojon Rahmonov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
