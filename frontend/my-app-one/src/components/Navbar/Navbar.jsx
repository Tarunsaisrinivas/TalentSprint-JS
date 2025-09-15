import React from "react";
import NavLinks from "./NavbarList";
function Navbar() {
    return (
        <nav className="sticky top-0 bg-gray-700 text-white px-6 py-4 flex justify-between  items-center shadow-md">
            <div >
                <img src="/vite.svg" alt="logo" className="hover:rotate-12" />
            </div>

            <ul className="flex space-x-6">
                {NavLinks.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            className="hover:text-gray-200 transition"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
