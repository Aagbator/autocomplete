import React, { ChangeEvent, useState } from "react";

type AutoCompleteProps = {
  items: string[];
  onChangeText: (value: string) => void;
};

const AutoComplete = ({ items, onChangeText }: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState("");

  const itemsWithIds: { id: string; item: string }[] = items.map((item) => ({
    id: crypto.randomUUID(),
    item,
  }));

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
          {itemsWithIds.map(({ item, id }) => (
            <li key={id}>{item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
