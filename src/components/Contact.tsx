import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-[50px] sm:py-[100px]">
      <div className="container px-4">
        <div className="max-w-[800px] mx-auto p-8 sm:p-16 bg-heroBg rounded-2xl flex flex-col sm:flex-row items-center sm:justify-between gap-8">
          <p className="max-w-full sm:max-w-[313px] text-center sm:text-left leading-[33px] text-graySecondary text-[22px] sm:text-[28px]">
            Want to work together? Follow the link and let&apos;s get in touch.
          </p>
          <Link
            className="bg-grayPrimary py-2.5 px-[18px] rounded-md text-white text-base leading-[22px]"
            href={"/"}
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
