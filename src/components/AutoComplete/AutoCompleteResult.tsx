import React, { ReactNode } from "react";
import { ItemWithId } from "./AutoComplete";

type AutoCompleteResultProps = {
  items: ItemWithId[];
  keyword: string;
  onSelectItem: (item: ItemWithId) => void;
};

const AutoCompleteResult = ({
  items,
  keyword,
  onSelectItem,
}: AutoCompleteResultProps) => {
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

  const hasResults = items.length > 0;

  return (
    <div className="autocomplete-result">
      {!hasResults && <span>No results</span>}
      {hasResults && (
        <ul role="listbox">
          {items.map((item, _) => (
            <li onClick={() => onSelectItem(item)} key={item.id}>
              <span>{highlightKeyword(item.name, keyword)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteResult;
