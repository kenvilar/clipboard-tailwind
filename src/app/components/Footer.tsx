import Image from "next/image";
import Logo from "@/app/assets/images/logo.svg";

const Footer = () => {
  const menu1Items = ["FAQs", "Contact Us"];
  const menu2Items = ["Privacy Policy", "Press Kit"];
  const menu3Items = ["Install Guide"];

  return (
    <>
      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <Image src={Logo} alt="logo" className="scale-50" />

            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              {/*Menus*/}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                <div className="flex flex-col space-y-4 text-center">
                  {menu1Items.map((item: any, idx) => {
                    return (
                      <div key={idx}>
                        <a href="#" className="hover:text-strongCyan">
                          {item}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
