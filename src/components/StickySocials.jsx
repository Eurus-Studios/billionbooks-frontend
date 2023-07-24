import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const StickySocials = () => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 z-50">
      <ul className="flex flex-col items-center">
        <li className="social-icon flex items-center fbg">
          <a href="#" className="hover:text-blue-500 transition-all">
            <FaFacebookF className="text-xl text-white m-2" />
          </a>
          <div className="hidden social-title ml-2s">Facebook</div>
        </li>
        <li className="social-icon flex items-center tbg">
          <a href="#" className="hover:text-blue-400 transition-all">
            <FaTwitter className="text-xl text-white m-2" />
          </a>
          <span className="hidden social-title ml-2 transition-all">Twitter</span>
        </li>
        <li className="social-icon flex items-center ibg">
          <a href="#" className="hover:text-red-600 transition-all">
            <FaInstagram className="text-xl text-white m-2" />
          </a>
          <span className="hidden social-title ml-2">Instagram</span>
        </li>
        <li className="social-icon flex items-center mbg">
          <a href="#" className="hover:text-blue-600 transition-all">
            <FaEnvelope className="text-xl text-white m-2" />
          </a>
          <span className="hidden social-title ml-2">Email</span>
        </li>
        <li className="social-icon flex items-center wbg">
          <a href="#" className="hover:text-pink-600 transition-all">
            <FaWhatsapp className="text-xl text-white m-2" />
          </a>
          <span className="hidden social-title ml-2">Whatsapp</span>
        </li>
      </ul>
    </div>
  );
};

export default StickySocials;
