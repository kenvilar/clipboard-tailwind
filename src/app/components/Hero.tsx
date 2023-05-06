import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
        <Image src={Logo} alt="logo" className="mx-auto my-16" />

        <h3>A history of everything you copy</h3>

        <p className="section-content "></p>
      </div>
    </section>
  );
};

export default Hero;
