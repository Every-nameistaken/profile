"use client"
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <header className="bg-gray-200" style={{ padding: "1rem" }}>
            <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className="font-semibold font-serif text-3xl text-indigo-600 decoration-1 hover:decoration-2 transition-all underline" style={{ fontWeight: "bold" }}><a href="/">LifeAsItIs</a></div>
                <div className="p-5">
                    <ul className="sm:flex hidden space-x-6 font-serif ">
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><a href="/">Home</a></li>
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><a href="/about">About</a></li>
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="sm:hidden block" style={{ position: "relative" }}>
                    <button onClick={handleDropdown} style={{ padding: "0.5rem 1rem" }}>
                        <FaBarsStaggered className="text-xl"/>
                    </button>
                    {dropdownOpen && (
                        <ul
                        className="p-4 space-y-3"
                            style={{
                                position: "absolute",
                                top: "2.5rem",
                                right: 0,
                                background: "#fff",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                listStyle: "none",
                                margin: 0,
                                minWidth: "120px",
                                zIndex: 1000,
                            }}
                        >
                             <li className="hover:underline text-gray-700 hover:text-gray-500"><a href="/">Home</a></li>
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><a href="/about">About</a></li>
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><a href="/contact">Contact</a></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;