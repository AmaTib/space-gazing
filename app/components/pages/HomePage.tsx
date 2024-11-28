"useclient";

import { IImageInfo } from "@/app/models/IImageInfo";
import ImageOfTheDay from "../ImageOfTheDay";

interface IHomePageProps {
  imgObject: IImageInfo;
}

const HomePage = ({ imgObject }: IHomePageProps) => {
  return (
    <>
      App page
      <ImageOfTheDay
        imgObject={imgObject}
        url={imgObject.url}
        hdurl={imgObject.hdurl}
        isImage={imgObject.media_type === "image"}
      />
    </>
  );
};

export default HomePage;
