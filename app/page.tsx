import { getImageByDate } from "@/services/imageServices";
import HomePage from "./components/views/HomePage";

export const dynamic = "force-dynamic";

export default async function Home() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
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
