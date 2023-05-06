import Google from "@/app/assets/images/logo-google.png";
import IBM from "@/app/assets/images/logo-ibm.png";
import Microsoft from "@/app/assets/images/logo-microsoft.png";
import Hp from "@/app/assets/images/logo-hp.png";
import Vector from "@/app/assets/images/logo-vector-graphics.png";

const References = () => {
  const items = [
    {
      icon: Google.src,
    },
    {
      icon: IBM.src,
    },
    {
      icon: Microsoft.src,
    },
    {
      icon: Hp.src,
    },
    {
      icon: Vector.src,
    },
  ];

  return (
    <>
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          {items.map((item: any, idx) => {
            return <img key={idx} src={item.icon} alt="companies" />;
          })}
        </div>
      </section>
    </>
  );
};

export default References;
