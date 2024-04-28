import React, { ChangeEvent, useState } from "react";

type AutoCompleteProps = {
  items: string[];
  onChangeText: (value: string) => void;
};

const AutoComplete = ({ items, onChangeText }: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setInputValue(value);
    onChangeText(value);
  };

  return (
    <div className="autocomplete-container">
      <input
        placeholder="Start typing..."
        autoComplete="false"
        type="text"
        onChange={handleOnChange}
      />
      <div className="autocomplete-result">
        <ul role="listbox">
          {items.map((item, index) => (
            <li key={index}>{item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
