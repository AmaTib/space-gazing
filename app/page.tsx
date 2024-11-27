import ImageOfTheDay from "@/app/components/ImageOfTheDay";
import { getImageByDate } from "@/services/imageServices";

export default async function Home() {
  const image = await getImageByDate();
  console.log(image);

  return (
    <>
      App page
      <ImageOfTheDay
        url={image.url}
        hdurl={image.hdurl}
        isImage={image.media_type === "image"}
      />
    </>
  );
}
