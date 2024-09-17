import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Store from "@/components/Store";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Store />
      <Contact />
    </>
  );
}
