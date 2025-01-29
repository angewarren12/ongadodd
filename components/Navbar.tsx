'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = `text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors`;
  const activeLinkClass = `text-teal-600`;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-teal-600">ADODD</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/"
              className={`${linkClass} ${pathname === "/" ? activeLinkClass : ""}`}
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className={`${linkClass} ${pathname === "/about" ? activeLinkClass : ""}`}
            >
              À Propos
            </Link>
            <Link
              href="/projets"
              className={`${linkClass} ${pathname === "/projets" ? activeLinkClass : ""}`}
            >
              Projets
            </Link>
            <Link 
              href="/benevolat"
              className={`${linkClass} ${pathname === "/benevolat" ? activeLinkClass : ""}`}
            >
              Bénévolat
            </Link>
            <Link 
              href="/blog"
              className={`${linkClass} ${pathname === "/blog" ? activeLinkClass : ""}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact"
              className={`${linkClass} ${pathname === "/contact" ? activeLinkClass : ""}`}
            >
              Contact
            </Link>
            <Link
              href="/don"
              className="ml-4 px-6 py-2 rounded-full text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors"
            >
              Faire un don
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`block ${linkClass} ${pathname === "/" ? activeLinkClass : ""}`}
          >
            Accueil
          </Link>
          <Link
            href="/about"
            className={`block ${linkClass} ${pathname === "/about" ? activeLinkClass : ""}`}
          >
            À Propos
          </Link>
          <Link
            href="/projets"
            className={`block ${linkClass} ${pathname === "/projets" ? activeLinkClass : ""}`}
          >
            Projets
          </Link>
          <Link
            href="/benevolat"
            className={`block ${linkClass} ${pathname === "/benevolat" ? activeLinkClass : ""}`}
          >
            Bénévolat
          </Link>
          <Link
            href="/blog"
            className={`block ${linkClass} ${pathname === "/blog" ? activeLinkClass : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`block ${linkClass} ${pathname === "/contact" ? activeLinkClass : ""}`}
          >
            Contact
          </Link>
          <Link
            href="/don"
            className="block w-full text-center mt-4 px-6 py-2 rounded-full text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors"
          >
            Faire un don
          </Link>
        </div>
      </div>
    </nav>
  );
}
