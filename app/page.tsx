import { getImageByDate } from "@/services/imageServices";
import HomePage from "./components/pages/HomePage";

export default async function Home() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const todaysDate = year + "-" + month + "-" + day;

  console.log("date:", date, "todaysdate:", todaysDate);

  const image = await getImageByDate(todaysDate);
  console.log(image);

  return (
    <>
      <HomePage imgObject={image} todaysDate={todaysDate} />
    </>
  );
}
