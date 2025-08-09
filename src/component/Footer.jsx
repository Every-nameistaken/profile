import React from 'react';

const Footer = () => (
    <footer className="bg-gray-200 text-gray-600 text-center py-4  w-full">
        <p>&copy; {new Date().getFullYear()} LifeAsItIs. All rights reserved.</p>
        <p>Designed by <a href='https://bamidele.com.ng' target='_blank' className='text-gray-800'>bamidele.com.ng</a></p>
    </footer>
);

export default Footer;
