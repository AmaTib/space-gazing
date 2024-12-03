"use client";

import { ChangeEvent, FormEvent } from "react";

interface IFormProps {
  inputType: string;
  btnText: string;
  submit: (date: string) => void;
  close: () => void;
  dateInput: string;
  setDateInput: React.Dispatch<React.SetStateAction<string>>;
  todaysDate: string;
}

export const Form = ({
  inputType,
  btnText,
  submit,
  close,
  dateInput,
  setDateInput,
  todaysDate,
}: IFormProps) => {
  return (
    <>
      <section>
        <button onClick={close}>X</button>

        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            submit(dateInput);
          }}
        >
          <input
            type={inputType}
            value={dateInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setDateInput(e.target.value);
            }}
            min="1995-06-16"
            max={todaysDate}
          />
          <button>{btnText}</button>
        </form>
      </section>
    </>
  );
};
