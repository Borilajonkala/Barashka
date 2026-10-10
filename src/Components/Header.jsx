import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);

const links = [
{ name: "Home", path: "/" },
{ name: "About", path: "/about" },
{ name: "Catalog", path: "/catalog" },
{ name: "Project", path: "/project" },
{ name: "Information", path: "/information" },
{ name: "Contact", path: "/contact" },
];

const linkStyle = ({ isActive }) =>
`block py-2 text-sm font-medium transition duration-200 ${
      isActive
        ? "text-indigo-600"
        : "text-gray-600 hover:text-indigo-600"
    }`;

return ( <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm"> <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

    <Link
      to="/"
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-900"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl text-white">
        ✦
      </span>
      <span>
        My<span className="text-indigo-600">Website</span>
      </span>
    </Link>

   
    <nav className="hidden items-center gap-6 lg:flex">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === "/"}
          className={linkStyle}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>

   
    <Link
      to="/"
      className="hidden items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 sm:flex"
    >
      Get Started <span className="text-lg">→</span>
    </Link>

    
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      className="rounded-lg border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
    >
      {menuOpen ? (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>
      ) : (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  </div>

  {/* Mobile navigation */}
  {menuOpen && (
    <nav className="border-t border-gray-100 bg-white px-5 py-4 shadow-lg lg:hidden">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === "/"}
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `block rounded-lg px-4 py-3 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}

      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Get Started →
      </Link>
    </nav>
  )}
</header>


);
};

export default Header;
