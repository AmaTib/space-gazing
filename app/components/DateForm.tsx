"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface IFormProps {
  submit: (date: string) => void;
  close: () => void;
  todaysDate: string;
}

export const DateForm = ({ submit, close, todaysDate }: IFormProps) => {
  const [dateInput, setDateInput] = useState(todaysDate);

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
