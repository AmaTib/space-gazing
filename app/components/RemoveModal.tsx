import "../styles/modal.scss";

interface IRemoveMOdalProps {
  imgTitle: string;
  removeFrom: string;
  remove: () => void;
  cancel: () => void;
}

export const RemoveModal = ({
  imgTitle,
  removeFrom,
  remove,
  cancel,
}: IRemoveMOdalProps) => {
  return (
    <>
      <section className="modalContainer">
        <div className="removeInfoContainer">
          <h3>
            Are you sure you want to remove <q>{imgTitle}</q> from {removeFrom}?
          </h3>

          <div className="buttonContainer">
            <button className="button button-secondary" onClick={cancel}>
              Cancel
            </button>
            <button className="button button-primary" onClick={remove}>
              Remove
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
