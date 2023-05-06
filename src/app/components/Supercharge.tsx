import Image from "next/image";
import IconBlacklist from "@/app/assets/images/icon-blacklist.svg";
import IconText from "@/app/assets/images/icon-text.svg";
import IconPreview from "@/app/assets/images/icon-preview.svg";

const Supercharge = () => {
  const items = [
    {
      icon: IconBlacklist,
      title: "Create Blacklists",
      desc: "Easily search your snippets by content, category, web address, application, and more.",
    },
    {
      icon: IconText,
      title: "Plain Text Snippets",
      desc: "Remove unwanted formatting from copied text for a consistent look.",
    },
    {
      icon: IconPreview,
      title: "Sneak Preview",
      desc: "Quick preview of all snippets on your Clipboard for easy access.",
    },
  ];

  return (
    <>
      <section id="supercharge">
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="section-content mb-16">
            We{`'`}ve got the tools to boost your productivity.
          </p>

          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {items.map((item: any, idx) => {
              return (
                <div key={idx} className="flex flex-col items-center space-y-5">
                  <Image src={item.icon} alt="blacklist" className="mb-6" />
                  <h5>{item.title}</h5>
                  <p className="max-w-md text-grayishBlue">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Supercharge;
