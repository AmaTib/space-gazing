import { FiTrash2 } from "react-icons/fi";
interface IRemoveButtonProps {
  eventWithParameter?: (param?: string) => void;
  event?: () => void;
}

export const RemoveButton = ({
  eventWithParameter,
  event,
}: IRemoveButtonProps) => {
  return (
    <>
      <button
        className="roundButton button button-primary"
        onClick={() => {
          if (eventWithParameter) {
            eventWithParameter();
          } else if (event) {
            event();
          }
        }}
      >
        <FiTrash2 />
      </button>
    </>
  );
};
