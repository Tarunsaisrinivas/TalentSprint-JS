import React from "react";
import footerLinks from "./FooterLinks";

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 px-6 py-4 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <img src="/vite.svg" alt="logo" />

                <ul className="flex space-x-4">
                    {footerLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="hover:text-white transition"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
