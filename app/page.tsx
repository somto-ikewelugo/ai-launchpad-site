import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Products } from "@/components/sections/products";
import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Approach />
      <Contact />
    </>
  );
}
