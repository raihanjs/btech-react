import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaAlignRight } from "react-icons/fa6";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [IsOpen, setIsOpen] = useState(false);
  const [dropIsOpen, setDropIsOpen] = useState(false);

  return (
    <header
      className={`${
        isScrolled && "bg-[#2a4445] drop-shadow-2xl"
      } md:mt-4 sticky top-0 left-0 w-full z-50`}
    >
      <div className="container">
        <div className="flex items-center md:items-start justify-between md:py-3">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white">BTECH</h2>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex gap-5 text-white text-xl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li className="flex items-center gap-2 relative">
                <span>Pages</span> <IoIosArrowDown className="mt-2" />
                <ul className="hidden absolute top-6 bg-orange-600 py-2">
                  <li className="pb-5 pl-8 pr-20">
                    <Link>Screenshots</Link>
                  </li>
                  <li className="pb-5 pl-8 pr-20">
                    <Link>Features</Link>
                  </li>
                  <li className="pb-5 pl-8 pr-20">
                    <Link>Career</Link>
                  </li>
                  <li className="pb-5 pl-8 pr-20">
                    <Link>FAQ</Link>
                  </li>
                  <li className="pb-5 pl-8 pr-20">
                    <Link>404</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Mobile Menu Button*/}
          <div className="block md:hidden bg-[#f24c00] py-8 pr-10 sm:pr-20 pl-28 sm:pl-32 rounded-md -mr-10 sm:-mr-16">
            {/* <div className="block md:hidden bg-[#f24c00] py-8 "> */}
            <button onClick={() => setIsOpen(!IsOpen)}>
              <FaAlignRight className="text-xl text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {IsOpen && (
        <div className="block md:hidden">
          <ul className="flex flex-col gap-5 text-white text-xl bg-[#f24c00] p-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => setDropIsOpen(!dropIsOpen)}
            >
              <div className="flex justify-between items-center mb-3">
                <span>Pages</span>{" "}
                {dropIsOpen ? (
                  <IoIosArrowUp className="mt-2" />
                ) : (
                  <IoIosArrowDown className="mt-2" />
                )}
              </div>
              {dropIsOpen && (
                <ul className="bg-orange-600 py-2">
                  <li className="pb-5 pl-8 pr-20">
                    <Link>Screenshots</Link>
                  </li>
                  <li className="pb-5 pl-8 pr-20">
                    <Link>Features</Link>
                  </li>
                  <li className="pb-5 pl-8 pr-20">
                    <Link>Career</Link>
                  </li>
                  <li className="pb-5 pl-8 pr-20">
                    <Link>FAQ</Link>
                  </li>
                  <li className="pb-5 pl-8 pr-20">
                    <Link>404</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
