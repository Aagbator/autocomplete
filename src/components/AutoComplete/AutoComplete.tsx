import React, { ChangeEvent, ReactNode, useState } from "react";
import "../AutoComplete/AutoComplete.css";
import AutoCompleteResult from "./AutoCompleteResult";

export type ItemWithId = { id: string; name: string };

type AutoCompleteProps = {
  items: string[];
  onChangeText: (value: string) => void;
};

const AutoComplete = ({ items, onChangeText }: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isResultVisible, setIsResultVisible] = useState(false);

  const itemsWithIds: { id: string; name: string }[] = items.map((item) => ({
    id: crypto.randomUUID(),
    name: item,
  }));

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setInputValue(value);
    onChangeText(value);
  };

  const handleOnFocus = () => {
    setIsResultVisible(true);
  };

  const handleOnBlur = () => {
    const timeout = setTimeout(() => setIsResultVisible(false), 300);
    return () => clearTimeout(timeout);
  };

  const onSelectItem = (item: ItemWithId) => {
    setInputValue(item.name);
    setIsResultVisible(false);
  };

  return (
    <div className="autocomplete-container">
      <input
        placeholder="Start typing..."
        autoComplete="false"
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {isResultVisible && (
        <AutoCompleteResult
          items={itemsWithIds}
          keyword={inputValue}
          onSelectItem={onSelectItem}
        ></AutoCompleteResult>
      )}
    </div>
  );
};

export default React.memo(AutoComplete);
