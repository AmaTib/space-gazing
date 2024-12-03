import { ChangeEvent, useState } from "react";

interface ICollectionFormProps {
  close: () => void;
  submit: (name: string) => void;
}

export const CollectionForm = ({ close, submit }: ICollectionFormProps) => {
  const [nameInput, setNameInput] = useState("");

  return (
    <>
      <button onClick={close}>X</button>
      <form
        onSubmit={() => {
          submit(nameInput);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          value={nameInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setNameInput(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
};
