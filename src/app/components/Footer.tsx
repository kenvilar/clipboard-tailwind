import Image from "next/image";
import Logo from "@/app/assets/images/logo.svg";
import Facebook from "@/app/assets/images/icon-facebook.svg";
import Twitter from "@/app/assets/images/icon-twitter.svg";
import Instagram from "@/app/assets/images/icon-instagram.svg";

const Footer = () => {
  const menu1Items = ["FAQs", "Contact Us"];
  const menu2Items = ["Privacy Policy", "Press Kit"];
  const menu3Items = ["Install Guide"];
  const socialItems = [Facebook, Twitter, Instagram];

  return (
    <>
      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <Image src={Logo} alt="logo" className="scale-50" />

            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              {/*Menus*/}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/*Menu1*/}
                <div className="flex flex-col space-y-4 text-center md:text-left">
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
                {/*Menu2*/}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  {menu2Items.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <a href="#" className="hover:text-strongCyan">
                          {item}
                        </a>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  {menu3Items.map((item, idx) => {
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

              {/*Social icons*/}
              <div className="flex justify-between w-32 py-1">
                {socialItems.map((item, idx) => {
                  return (
                    <a key={idx} href="#">
                      <Image
                        src={item}
                        alt="social"
                        className="duration-200 ficon"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
