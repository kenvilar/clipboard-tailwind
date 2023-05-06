import Comp from "@/app/assets/images/image-computer.png";

const Features = () => {
  const items = [
    {
      title: "Quick Search",
      desc: "Easily search your snippets by content, category, web address, application, and more.",
    },
    {
      title: "iCloud Sync",
      desc: "Instantly saves and syncs snippets across all your devices.",
    },
    {
      title: "Completely History",
      desc: "Retrieve any snippets from the first moment you started using the app.",
    },
  ];

  return (
    <>
      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            {/*image*/}
            <div className="md:w-1/2">
              <img
                src={Comp.src}
                alt="feature-img"
                className="md:absolute top-0 right-[50%]"
              />
            </div>
            {/*items container*/}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              {items.map((item, idx) => {
                return (
                  <div key={idx}>
                    <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                      {item.title}
                    </h5>
                    <p className="max-w-md text-grayishBlue">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
