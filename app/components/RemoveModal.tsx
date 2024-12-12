import { RemoveButton } from "./RemoveButton";

interface IRemoveMOdalProps {
  imgTitle: string;
  remove: (date: string) => void;
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
          <RemoveButton eventWithParameter={(date) => remove(date!)} />
        </div>
      </section>
    </>
  );
};
