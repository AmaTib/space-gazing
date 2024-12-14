import "../styles/modal.scss";
import { FiX } from "react-icons/fi";
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
      <section className="modalContainer">
        <button className="closeButton" onClick={openImageInfo}>
          <FiX />
        </button>
        <p className="imgDescription">{imgExplanation}</p>
      </section>
    </>
  );
};
