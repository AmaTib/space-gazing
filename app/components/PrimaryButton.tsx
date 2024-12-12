interface IPrimaryButtonProp {
  text: string;
  event: () => void;
}

export const PrimaryButton = ({ text, event }: IPrimaryButtonProp) => {
  return (
    <>
      <button className="button button-primary" onClick={event}>
        {text}
      </button>
    </>
  );
};
