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
        <header className="bg-gray-200 fixed left-0 top-0 right-0 z-50 my-auto" style={{ padding: "1rem"}}>
            <nav className="" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className="font-semibold font-serif text-3xl text-gray-800 decoration-1 hover:decoration-2 transition-all underline"><Link href="/"> AyDev </Link></div>
                <div className="p-2">
                    <ul className="sm:flex hidden space-x-6 font-serif ">
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><Link  href="/" className={isActive("/")}>Home</Link></li>
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><Link href="/about" className={isActive("/about")}  >About</Link></li>
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><Link href="/contact" className={isActive("/contact")} >Contact</Link></li>
                    </ul>
                </div>
                <div className="sm:hidden block " style={{ position: "relative" }}>
                    <button onClick={handleDropdown} style={{ padding: "0.5rem 1rem" }}>
                        <FaBarsStaggered className="text-xl dark:text-gray-800 text-gray-800"/>
                    </button>
                     {dropdownOpen && (
                        <ul
                        className="p-4 space-y-3 w-screen bg-gray-200"
                            style={{
                                position: "fixed",
                                top: "4.3rem",
                                right: 0,
                                left: 0,
                                listStyle: "none",
                                margin: 0,
                                zIndex: 21,
                            }}
                        >
                             <li className="hover:underline text-gray-700  hover:text-gray-500"><Link href="/" className={isActive("/")+`w-12/12 block  `} >Home</Link></li>
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><Link href="/about" className={isActive("/about")+`w-12/12 block`} >About</Link></li>
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><Link href="/contact" className={isActive("/contact")+`w-12/12 block `} >Contact</Link></li>
                        </ul>
                    )}
                </div>
               
            </nav>
        </header>
    );
};

export default Header;