import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SiSwiggy } from "react-icons/si";

function Navbar() {
  const location = useLocation();
  console.log("location", location);

  return (
    <>
      <header className="sticky top-0 bg-orange-500 text-white px-8 py-4 flex justify-between items-center shadow-lg z-50">
        <div className="text-xl font-bold tracking-wide">
          <SiSwiggy className='text-orange-500 bg-white size-12 p-1.5  rounded' />
        </div>
        <nav>
          <ul className="flex gap-8 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-gray-700  pb-1"
                    : "hover:text-gray-300 transition-colors"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-gray-700 pb-1"
                    : "hover:text-gray-300 transition-colors"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-gray-700 pb-1"
                    : "hover:text-gray-300 transition-colors"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
