import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="sm:py-[100px] py-[50px]  bg-heroBg relative overflow-hidden">
      <div className="container flex justify-between items-center gap-10 flex-col  md:flex-row">
        {/* Hero Left block */}
        <div className="md:max-w-[532px]">
          <h1 className="text-4xl lg:text-5xl text-grayPrimary leading-[40px] lg:leading-[57px] max-w-[440px] mb-[11px]">
            Hi, I&apos;m James Mirro & I&apos;m a photographer.
          </h1>
          <p className="text-base leading-[22px] text-graySecondary mb-[17px] text-justify sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <Link
            className="bg-grayPrimary py-2.5 px-[18px] rounded-md text-white text-base leading-[22px]"
            href={"/"}
          >
            Read more
          </Link>
        </div>
        {/* Hero Image */}
        <Image
          src={"/images/png/photographer.png"}
          alt="Hero Image"
          width={300}
          height={600}
          className="lg:w-[500px] w-[400px] lg:h-[773px] h-[550px] object-cover rounded-3xl shadow-[0px_3px_15px_0px_#0000001A]"
        />

        {/* Gradients */}
        <div className="w-[564px] h-[494px] bg-top-right-radial absolute sm:top-[-50px] sm:right-[-100px] top-[-200px] right-[-300px]"></div>
        <div className="w-[734px] h-[813px] bg-bottom-left-radial absolute sm:bottom-[-350px] sm:left-[-222px] bottom-[-400px] left-[-400px]"></div>
      </div>
    </section>
  );
};

export default Hero;
