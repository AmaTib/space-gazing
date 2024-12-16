import "../../styles/aboutPage.scss";

export const AboutPage = () => {
  return (
    <>
      <section className="mainInnerContainer">
        <div className="bigLogoContainer">
          <div className="bigLogo"></div>
          <div className="aboutText">
            <p>
              SpaceGazing is a web application where you can explore mesmerizing
              space photos from NASA. Each day brings a new picture, and you can
              search to see what image was featured on a specific date. Take the
              opportunity to read the image info and expand your knowledge of
              the cosmos. But it does not end there, create personalized
              collections of your favorite images, and enjoy creating your own
              gallery of the milky way and beyond.
            </p>
            <p>The universe is the limit!</p>
            <p>
              Please note: Your collections and saved images are stored in your
              browser&apos;s local storage. Clearing your browser history or
              data will remove them completely.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
