import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-graySecondary py-[50px] sm:py-[100px]">
      <div className="container flex flex-col items-center">
        {/* Footer Dark Logo */}
        <Link href="/" className="mb-[30px] sm:mb-[75px]">
          <Image
            src={"./images/svg/dark-logo.svg"}
            alt="Dark Logo image"
            width={160}
            height={43}
            className="w-[120px] h-auto sm:w-[160px]"
          />
        </Link>
        {/* Footer content */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 sm:gap-5 flex-wrap">
          <ul className="flex flex-col gap-2.5">
            <li className="text-[14px] leading-[19.6px] tracking-[3px] uppercase text-redSecondary">
              Pages
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Store
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                About
              </Link>
            </li>
            <li className="mb-[22px]">
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Contact
              </Link>
            </li>
            <li className="text-[14px] leading-[19.6px] tracking-[3px] uppercase text-redSecondary">
              Store categories
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Presets
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Prints
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2.5">
            <li className="text-[14px] leading-[19.6px] tracking-[3px] uppercase text-redSecondary">
              Preset packs
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Mirro Preset Pack Vol. 01
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Mirro Preset Pack Vol. 02
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Mirro Preset Pack Vol. 03
              </Link>
            </li>
            <li className="mb-[10px]">
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Mirro Preset Pack Vol. 04
              </Link>
            </li>
            <li className="text-[14px] leading-[19.6px] tracking-[3px] uppercase text-redSecondary">
              Business Areas
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Wedding Photography
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Sports Photography
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Portrait Photography
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Architecture Photography
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Animal Photography
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Food Photography
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Nature Photography
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2.5">
            <li className="text-[14px] leading-[19.6px] tracking-[3px] uppercase text-redSecondary">
              Utility Pages
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Instructions
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Style guide
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Licenses
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                Changelog
              </Link>
            </li>
            <li>
              <Link className="text-base leading-[22px] text-white" href={"/"}>
                404
              </Link>
            </li>
          </ul>
          {/* Footer Email Form */}
          <form className="lg:max-w-[427px] w-full">
            <h4 className="text-[14px] leading-[19.6px] tracking-[3px] uppercase text-redSecondary">
              Newsletter
            </h4>
            <p className="text-base text-whitePrimary leading-[22px] mb-2">
              Subscribe to my newsletter where I share news about upcoming
              printings and preset sales.
            </p>
            <div className="w-full h-[53px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg flex items-center gap-3 justify-between p-[7px]">
              <input
                type="email"
                required
                placeholder="Email address"
                className="pl-[17px] h-full outline-none rounded-l-lg bg-transparent w-full"
              />
              <button className="px-2.5 pt-[7px] pb-[9px] bg-graySecondary rounded-[10px] text-whitePrimary text-base leading-[22px]">
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Footer bottom */}
        <div className="w-full flex flex-col gap-2 sm:flex-row items-center justify-between mt-7">
          <p className="text-base text-white text-center sm:text-left">
            © Mirro Photography, LLC. All rights reserved. Powered by Webflow.
          </p>
          {/* Footer Icons List */}
          <ul className="flex gap-5 items-center mt-5 sm:mt-0">
            <li>
              <Link href={"/"}>
                <i className="icon-linkedin text-white text-2xl"></i>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <i className="icon-facebook text-white text-2xl"></i>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <i className="icon-instagram text-white text-2xl"></i>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <i className="icon-twitter text-white text-2xl"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
