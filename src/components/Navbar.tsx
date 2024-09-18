"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavLinks = [
    {
      label: "Presets",
      href: "/",
    },
    {
      label: "Prints",
      href: "/",
    },
    {
      label: "Store",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },
    {
      label: "Contact",
      href: "/",
    },
  ];

  return (
    <nav className="bg-white sticky top-0 z-10">
      <div className="container py-[13px] flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/images/svg/logo.svg"
            alt="Logo Image"
            width={113}
            height={30}
            className="sm:h-[30px] h-[25px]"
          />
        </Link>

        {/* Nav List */}
        <ul className="hidden sm:flex items-center md:gap-5 gap-2">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-base leading-4 text-grayPrimary"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Cart Link */}
          <li>
            <Link
              href={""}
              className="px-[18px] py-2.5 bg-grayPrimary flex items-center gap-2 rounded-md text-white text-base ml-2 lg:ml-5"
            >
              <i className="icon-cart text-[17px] text-black"></i>
              Cart
              <div className="w-[19px] h-[18px] bg-white rounded-full flex items-center justify-center">
                <span className="text-[11px] text-grayPrimary leading-[18px]">
                  0
                </span>
              </div>
            </Link>
          </li>
        </ul>

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden flex items-center transition-all active:scale-90"
        >
          <i className="icon-hamburger text-2xl"></i>
        </button>

        {/* Inner Mobile Navbar */}
        <nav
          className={`transition-all duration-300 fixed top-0 ${
            isOpen ? "left-0" : "left-[-100%]"
          } bg-white w-[100%] h-screen z-20 flex flex-col justify-center items-center `}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="border absolute top-10 right-10 rounded-full transition-all w-9 h-9 active:scale-90"
          >
            <i className="icon-close text-2xl"></i>
          </button>
          <ul className="flex flex-col items-center gap-5">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-2xl leading-4 text-grayPrimary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={""}
                className="px-[18px] py-2.5 bg-grayPrimary flex items-center gap-2 rounded-md text-white text-base ml-2 lg:ml-5"
              >
                <i className="icon-cart text-[17px] text-black"></i>
                Cart
                <div className="w-[19px] h-[18px] bg-white rounded-full flex items-center justify-center">
                  <span className="text-[11px] text-grayPrimary leading-[18px]">
                    0
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
