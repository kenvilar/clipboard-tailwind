import Image from "next/image";
import Logo from "@/app/assets/images/logo.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="section-container mb-40 px-10 pt-16">
        <Image src={Logo} alt="logo" className="mx-auto my-16" />

        <h3>A history of everything you copy</h3>

        <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        <div className="button-container">
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
