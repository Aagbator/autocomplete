import React, { ChangeEvent, ReactNode, useState } from "react";

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

  const highlightKeyword = (text: string, keyword: string): ReactNode => {
    if (!keyword) return [<span key="0">{text}</span>];

    const parts: ReactNode[] = [];
    let lastIndex = 0;
    let keyIndex = 0;

    // Find all occurrences of the keyword in the text
    while (true) {
      const index = text
        .toLowerCase()
        .indexOf(keyword.toLowerCase(), lastIndex);
      if (index === -1) break;

      // Add the text before the keyword
      if (index > lastIndex) {
        parts.push(
          <span key={`text-${keyIndex++}`}>
            {text.substring(lastIndex, index)}
          </span>
        );
      }

      // Add the keyword with highlighting
      parts.push(
        <b key={`match-${keyIndex++}`}>
          {text.substring(index, index + keyword.length)}
        </b>
      );

      lastIndex = index + keyword.length;
    }

    // Add the remaining text after the last match
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${keyIndex++}`}>{text.substring(lastIndex)}</span>
      );
    }

    return parts;
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
            <li key={index}>{highlightKeyword(item, inputValue)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
