"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdown = () => setDropdownOpen(!dropdownOpen);

    const pathname = usePathname();
    const isActive = (path) => pathname === path ? "underline decoration-2" : "";

    return (
        <header className="bg-gray-200 dark:bg-gray-900 fixed left-0 top-0 right-0 z-50 my-auto" style={{ padding: "1rem"}}>
            <nav className="flex items-center justify-between">
                <div className="font-semibold font-serif text-3xl text-gray-800 dark:text-white decoration-1 hover:decoration-2 transition-all underline"><Link href="/"> AyDev </Link></div>
                <div className="p-2">
                    <ul className="sm:flex hidden space-x-6 font-serif">
                        <li className="hover:underline text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"><Link href="/" className={isActive("/")}>Home</Link></li>
                        <li className="hover:underline text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"><Link href="/about" className={isActive("/about")}>About</Link></li>
                        <li className="hover:underline text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"><Link href="/resume" className={isActive("/resume")}>Resume</Link></li>
                        <li className="hover:underline text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"><Link href="/contact" className={isActive("/contact")}>Contact</Link></li>
                    </ul>
                </div>
                <div className="sm:hidden block relative">
                    <button onClick={handleDropdown} className="p-2">
                        <FaBarsStaggered className="text-xl text-gray-800 dark:text-white"/>
                    </button>
                    {dropdownOpen && (
                        <ul className="p-4 space-y-3 w-screen bg-gray-200 dark:bg-gray-800 fixed top-16 right-0 left-0 z-21">
                            <li className="hover:underline text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"><Link href="/" className={isActive("/") + " w-full block"}>Home</Link></li>
                            <li className="hover:underline text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"><Link href="/about" className={isActive("/about") + " w-full block"}>About</Link></li>
                            <li className="hover:underline text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"><Link href="/resume" className={isActive("/resume") + " w-full block"}>Resume</Link></li>
                            <li className="hover:underline text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"><Link href="/contact" className={isActive("/contact") + " w-full block"}>Contact</Link></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;