import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => (
    <footer className="bg-gray-200 text-gray-600 text-center py-4  w-full">
        <p>&copy; {new Date().getFullYear()} LifeAsItIs. All rights reserved.</p>
        <div className=" h-10 flex items-center justify-center">
                        <ul className="flex p-4 space-x-7">
                            <li><a href="https://wa.me/2349069783939" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} className="text-green-500 hover:scale-110 transition" /></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} className="text-blue-600 hover:scale-110 transition" /></a></li>
                            <li><a href="https://x.com/My_Self______" target="_blank" rel="noopener noreferrer"><FaXTwitter size={24} className="text-black hover:scale-110 transition" /></a></li>
                            <li><a href="https://www.linkedin.com/in/ayokunle-dada-9a2300327" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} className="text-blue-700 hover:scale-110 transition" /></a></li>

                        </ul>
                    </div>
    </footer>
);

export default Footer;
