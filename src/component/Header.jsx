"use client"
import React, { useState } from "react";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <header style={{ padding: "1rem", background: "#f5f5f5" }}>
            <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className="font-semibold font-serif text-3xl text-indigo-600 decoration-1 hover:decoration-2 transition-all underline" style={{ fontWeight: "bold" }}>LOGO</div>
                <div className="p-5">
                    <ul className="flex space-x-6 font-serif ">
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><a href="/">Home</a></li>
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><a href="/about">About</a></li>
                        <li className="hover:underline text-gray-700 hover:text-gray-500"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div style={{ position: "relative" }}>
                    <button onClick={handleDropdown} style={{ padding: "0.5rem 1rem" }}>
                        Menu ▼
                    </button>
                    {dropdownOpen && (
                        <ul
                            style={{
                                position: "absolute",
                                top: "2.5rem",
                                right: 0,
                                background: "#fff",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                listStyle: "none",
                                margin: 0,
                                padding: "0.5rem 0",
                                minWidth: "120px",
                                zIndex: 1000,
                            }}
                        >
                            <li style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Profile</li>
                            <li style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Settings</li>
                            <li style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Logout</li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;