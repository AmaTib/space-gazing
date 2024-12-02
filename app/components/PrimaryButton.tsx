interface IPrimaryButtonProp {
  text: string;
  event: () => void;
}

export const PrimaryButton = ({ text, event }: IPrimaryButtonProp) => {
  return (
    <>
      <button onClick={event}>{text}</button>
    </>
  );
};
