import Devices from "@/app/assets/images/image-devices.png";

const AccessAnywhere = () => {
  return (
    <>
      <section id="access">
        <div className="section-container my-20">
          <h3>Access Clipboard Anywhere</h3>
          <p className="section-content mb-24 text-xl">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>

          <img src={Devices.src} alt="img-devices" className="mx-auto" />
        </div>
      </section>
    </>
  );
};

export default AccessAnywhere;
