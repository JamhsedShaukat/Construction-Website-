"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logoMain } from "../../public/as/assets";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-main text-w1">
      <div className="container mx-auto flex justify-between items-center px-4 py-5">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Image src={logoMain} width={102} height={23} alt="logo"></Image>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>
          <Link href="/jobs" className="hover:text-gray-300">
            Jobs
          </Link>
          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </nav>

        <Link
          href="/get-started"
          className="hidden md:flex bg-b1 hover:bg-[#777777] px-4 py-2 rounded"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed inset-0 bg-gray-800 text-w1 z-50  transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0 h-screen" : "-translate-x-full"
        }`}
      >
        {/* Header in Mobile Menu */}
        <div className="flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div>
            <Image src={logoMain} width={102} height={23} alt="logo"></Image>
          </div>
          {/* Close Button */}
          <button
            className="text-w1 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="space-y-2 px-4 py-3">
          <Link href="/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link href="/products" className="block hover:text-gray-300">
            Products
          </Link>
          <Link href="/jobs" className="block hover:text-gray-300">
            Jobs
          </Link>
          <Link href="/pricing" className="block hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/about" className="block hover:text-gray-300">
            About
          </Link>
          <Link
            href="/get-started"
            className="block bg-b1 hover:bg-[#777777] px-4 py-2 rounded text-center"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
