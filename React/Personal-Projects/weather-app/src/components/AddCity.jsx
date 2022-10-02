import { useState } from "react";

export const AddCity = ({ onNewCity }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onNewCity(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Search City"
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
