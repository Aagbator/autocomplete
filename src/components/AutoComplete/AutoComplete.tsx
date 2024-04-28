import React from "react";

type AutoCompleteProps = {
  items: string[];
  onChangeText: (value: string) => void;
};

const AutoComplete = ({ items, onChangeText }: AutoCompleteProps) => {
  return <div>AutoComplete</div>;
};

export default AutoComplete;
