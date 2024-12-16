"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

interface IFormProps {
  submit: (date: string) => void;
  todaysDate: string;
}

export const DateForm = ({ submit, todaysDate }: IFormProps) => {
  const [dateInput, setDateInput] = useState(todaysDate);

  return (
    <>
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
        <button>
          <FiSearch />
        </button>
      </form>
    </>
  );
};
