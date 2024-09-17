import Image from "next/image";
import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const servicesCards = [
    {
      iconName: "icon-card1 text-2xl",
      title: "Wedding Photography",
      description:
        "Wedding photography is often called the bread and butter of photographers — but that doesn't mean it has to be boring. Quite the opposite!",
      href: "/",
    },
    {
      iconName: "icon-card2 text-2xl",
      title: "Sports Photography",
      description:
        "Sports photography is awesome. Sitting on the sidelines with a massive telephoto allows me to get right into the action — I love shooting sports where there's a lot of explosive movement.",
      href: "/",
    },
    {
      iconName: "icon-card3 text-2xl",
      title: "Portrait Photography",
      description:
        "Who doesn't love portrait photography? I love being able to capture that expression, quirk, smile or whatever, that sort of defines a person.",
      href: "/",
    },
    {
      iconName: "icon-card4 text-2xl",
      title: "Architecture Photography",
      description:
        "The nice thing about shooting architecture (in my opinion) is that it's so easy to do. Seriously, just pick up your camera and get out there.",
      href: "/",
    },
    {
      iconName: "icon-card5 text-2xl",
      title: "Animal Photography",
      description:
        "Whenever I'm travelling I always make sure to pack gear that allows me to capture the local wildlife. The eagle that takes flight in this picture is probably my most prized image.",
      href: "/",
    },
    {
      iconName: "icon-card6 text-2xl",
      title: "Food Photography",
      description:
        "I do food photography for blogs, restaurants, influencers, YouTube channels — but most importantly (if I manage to cook something that looks good) — I do food photography for myself.",
      href: "/",
    },
    {
      iconName: "icon-card7 text-2xl",
      title: "Nature Photography",
      description:
        "Landscape photography just never gets old. Someone told me that those are the kinds of pictures you never look. Well, I don't agree.",
      href: "/",
    },
  ];

  return (
    <section className="overflow-hidden relative">
      <div className="container py-10 sm:py-20 text-center">
        {/* Decoration Image */}
        <Image
          src={"/images/svg/decoration.svg"}
          width={160}
          height={19}
          className="mx-auto mb-4"
          alt="Decor Image"
        />
        <h2 className="text-2xl sm:text-[32px] text-grayPrimary leading-[38px] mb-4">
          Services
        </h2>
        <p className="text-sm sm:text-base leading-[22px] text-graySecondary max-w-xl mx-auto mb-[47px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </p>
        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesCards.map((card, index) => (
            <ServicesCard key={index} {...card} />
          ))}
        </div>
        {/* Gradient */}
      </div>
      <div className="w-[806px] h-[663px] services-radial absolute bottom-[-335px] left-[-460px]"></div>
    </section>
  );
};

export default Services;
