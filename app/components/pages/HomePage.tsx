"useclient";

import { IImageInfo } from "@/app/models/IImageInfo";
import ImageOfTheDay from "../ImageOfTheDay";

interface IHomePageProps {
  imgObject: IImageInfo;
  todaysDate: string;
}

const HomePage = ({ imgObject, todaysDate }: IHomePageProps) => {
  return (
    <>
      App page
      <ImageOfTheDay
        imgObject={imgObject}
        url={imgObject.url}
        hdurl={imgObject.hdurl}
        isImage={imgObject.media_type === "image"}
      />
      <section>
        <button>Previous</button>
        <p>{imgObject.date + todaysDate}</p>

        {imgObject.date !== todaysDate && <button>Next</button>}
      </section>
    </>
  );
};

export default HomePage;
