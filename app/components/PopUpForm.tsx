import "../styles/popUpForm.scss";
import { FiX } from "react-icons/fi";

interface IPopUpFormProps {
  children: JSX.Element;
  close: () => void;
  heading: string;
}

export const PopUpForm = ({ children, close, heading }: IPopUpFormProps) => {
  return (
    <>
      <section className="popUpFormContainer">
        <button className="closeButton" onClick={close}>
          <FiX />
        </button>
        <h3>{heading}</h3>
        {children}
      </section>
    </>
  );
};
