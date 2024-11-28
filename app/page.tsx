import { getImageByDate } from "@/services/imageServices";
import HomePage from "./components/pages/HomePage";

export default async function Home() {
  const image = await getImageByDate();
  console.log(image);

  return (
    <>
      <HomePage imgObject={image} />
    </>
  );
}
