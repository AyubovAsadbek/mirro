import Image from "next/image";
import React from "react";
import StoreCard from "./StoreCard";
import Link from "next/link";

const Store = () => {
  const storeCards = [
    {
      image: "/images/png/store-1.png",
      title: "Mirro Preset Pack Vol. 01",
      description:
        "The first volume is my go-to presets when shooting action sports. Just the right amount of contrast and highlights to make your photo (literally) pop!",
    },
    {
      image: "/images/png/store-2.png",
      title: "Mirro Preset Pack Vol. 02",
      description:
        "Vol. 02 is dedicated solely to landscape photography. Pay attention to your exposure while out there and these presets will make your photos look great.",
    },
    {
      image: "/images/png/store-3.png",
      title: "Mirro Preset Pack Vol. 03",
      description:
        "These are a collection of my most used wedding presets — use with caution as you'll end up loving wedding photography.",
    },
  ];

  return (
    <section className="py-[50px] sm:py-[100px] bg-heroBg text-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Decoration Image */}
        <Image
          src={"/images/svg/decoration.svg"}
          width={160}
          height={19}
          className="mx-auto mb-4"
          alt="Decor Image"
        />
        <h2 className="text-[32px] leading-[38px] text-redPrimary mb-[11px]">
          Preset Store
        </h2>
        <p className="text-sm sm:text-base leading-[22px] text-graySecondary max-w-xl mx-auto mb-[47px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </p>

        {/* Store Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[30px]">
          {storeCards.map((card, index) => (
            <StoreCard key={index} {...card} />
          ))}
        </div>
        <Link
          href={"/"}
          className="w-[150px] mx-auto text-[17px] text-grayPrimary leading-[23.8px] flex items-center justify-center gap-[5px]"
        >
          Preset store
          <i className="icon-arrow"></i>
        </Link>
      </div>

      {/* Gradient */}
      <div className="w-[516px] h-[501px] store-radial absolute right-[-213px] bottom-[-198px]"></div>
    </section>
  );
};

export default Store;
