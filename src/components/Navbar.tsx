import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
    <nav className="container py-[13px] flex justify-between items-center">
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
      <button className="sm:hidden flex items-center">
        <i className="icon-hamburger text-2xl"></i>
      </button>
    </nav>
  );
};

export default Navbar;
