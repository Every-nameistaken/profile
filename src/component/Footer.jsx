import React from 'react';

const Footer = () => (
    <footer className="bg-gray-200 text-gray-600 text-center py-4 fixed left-0 bottom-0 w-full">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
);

export default Footer;
