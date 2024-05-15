import React, { FC } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (inputValue: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = (
      form.elements.namedItem("searchInput") as HTMLInputElement
    ).value;
    if (inputValue.trim() === "") {
      toast.error(
        "Input field cannot be empty! Please enter a value for the search🙂"
      );
      return;
    }
    onSubmit(inputValue);
    form.reset();
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
