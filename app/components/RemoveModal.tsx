interface IRemoveMOdalProps {
  imgTitle: string;
  remove: () => void;
  cancel: () => void;
}

export const RemoveModal = ({
  imgTitle,
  remove,
  cancel,
}: IRemoveMOdalProps) => {
  return (
    <>
      <section className="modalContainer">
        <div className="removeInfoContainer">
          <h3>
            Are you sure you want to remove <q>{imgTitle}</q> from your liked
            images?
          </h3>
          <button className="button button-secondary" onClick={cancel}>
            Cancel
          </button>
          <button className="button button-primary" onClick={remove}>
            Remove
          </button>
        </div>
      </section>
    </>
  );
};
