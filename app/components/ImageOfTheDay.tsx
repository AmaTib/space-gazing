import Image from "next/image";

interface ImageOfTheDayProps {
  hdurl: string;
  url: string;
  isImage: boolean;
}

const ImageOfTheDay = ({ url, hdurl, isImage }: ImageOfTheDayProps) => {
  return (
    <>
      {isImage ? (
        <Image src={hdurl} alt="Nasa image" height={200} width={200}></Image>
      ) : (
        <iframe src={url}></iframe>
      )}
      <button>i</button>
    </>
  );
};

export default ImageOfTheDay;
