import { PrimaryButton } from "./PrimaryButton";
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
        <div>
          <h3>
            Are you sure yo want to remove the image with the name {imgTitle}
          </h3>
          <RemoveButton eventWithParameter={(date) => remove(date!)} />
          <PrimaryButton text="Cancel" event={cancel} />
        </div>
      </section>
    </>
  );
};
