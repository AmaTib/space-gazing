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
        className="removeImgButton"
        onClick={() => {
          if (eventWithParameter) {
            eventWithParameter();
          } else if (event) {
            event();
          }
        }}
      >
        Ta bort
      </button>
    </>
  );
};
