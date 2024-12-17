import "../styles/logo.scss";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

const Logo = () => {
  return (
    <>
      <div className="logoContainer">
        <div className="logoCircle"></div>
        <p className={audiowide.className}>SpaceGazing</p>
      </div>
    </>
  );
};

export default Logo;
