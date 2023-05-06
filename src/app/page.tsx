import Hero from "@/app/components/Hero";
import AccessAnywhere from "@/app/components/AccessAnywhere";
import Features from "@/app/components/Features";
import Snippets from "@/app/components/Snippets";
import Supercharge from "@/app/components/Supercharge";
import References from "@/app/components/References";
import BottomCTA from "@/app/components/BottomCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <Snippets />

      <Features />

      <AccessAnywhere />

      <Supercharge />

      <References />

      <BottomCTA />

      <Footer />
    </>
  );
}
