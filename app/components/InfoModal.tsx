interface IInfoModalProps {
  imgExplanation: string;
  openImageInfo: () => void;
}

export const InfoModal = ({
  imgExplanation,
  openImageInfo,
}: IInfoModalProps) => {
  return (
    <>
      <section className="imageModalContainer">
        <button onClick={openImageInfo}>close info</button>
        <p>{imgExplanation}</p>
      </section>
    </>
  );
};
