"use client";

import { ChangeEvent, FormEvent } from "react";

interface IFormProps {
  submit: (date: string) => void;
  close: () => void;
  dateInput: string;
  setDateInput: React.Dispatch<React.SetStateAction<string>>;
  todaysDate: string;
}

export const DateForm = ({
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
            type="date"
            value={dateInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setDateInput(e.target.value);
            }}
            min="1995-06-16"
            max={todaysDate}
          />
          <button>Search date</button>
        </form>
      </section>
    </>
  );
};
