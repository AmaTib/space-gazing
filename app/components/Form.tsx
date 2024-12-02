interface IFormProps {
  inputType: string;
  btnText: string;
  submit: () => void;
  close: () => void;
}

export const Form = ({ inputType, btnText, submit, close }: IFormProps) => {
  return (
    <>
      <section>
        <button onClick={close}>X</button>

        <form onSubmit={submit}>
          <input type={inputType} />
          <button>{btnText}</button>
        </form>
      </section>
    </>
  );
};
