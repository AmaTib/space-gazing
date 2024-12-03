interface IRemoveButtonProps {
  remove: () => void;
}

export const RemoveButton = ({ remove }: IRemoveButtonProps) => {
  return (
    <>
      <button onClick={remove}>Ta bort</button>
    </>
  );
};
