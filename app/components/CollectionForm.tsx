import { ChangeEvent, useState } from "react";

interface ICollectionFormProps {
  submit: (name: string) => void;
}

export const CollectionForm = ({ submit }: ICollectionFormProps) => {
  const [nameInput, setNameInput] = useState("");

  return (
    <>
      <form
        onSubmit={() => {
          submit(nameInput);
        }}
      >
        <label>Collection name</label>
        <input
          type="text"
          required
          minLength={3}
          maxLength={30}
          value={nameInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setNameInput(e.target.value);
          }}
        />
        <button>Add +</button>
      </form>
    </>
  );
};
