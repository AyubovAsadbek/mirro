import Link from "next/link";
import React from "react";

const ServicesCard = ({ title, description, iconName, href }) => {
  return (
    <div className="w-full rounded-2xl h-auto bg-heroBg p-6 sm:p-8 text-left shadow-[0px_3px_15px_0px_#00000008]">
      <div className="w-12 h-12 rounded-full bg-[#3A5F561A] flex items-center justify-center mb-3">
        <i className={iconName}></i>
      </div>
      <h3 className="text-grayPrimary text-xl sm:text-2xl leading-7 mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base leading-6 text-graySecondary mb-4">
        {description}
      </p>
      <Link
        href={href}
        className="flex items-center gap-1 text-grayPrimary text-sm sm:text-base"
      >
        Read more <i className="icon-arrow"></i>
      </Link>
    </div>
  );
};

export default ServicesCard;
