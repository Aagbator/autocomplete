import React, { useEffect, useState } from "react";
import "./App.css";
import AutoComplete from "./components/AutoComplete/AutoComplete";
import { getCountries } from "./mockApi/countries-api";
import { useDebounceValue } from "./hooks/useDebounceValue";

function App() {
  const [countries, setCountries] = useState<string[]>([]);
  const [filterText, setFilterText] = useState<string>("");

  const debouncedFilterText = useDebounceValue(filterText);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries(debouncedFilterText);
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, [debouncedFilterText]);

  const onChangeTextHandler = (text: string) => {
    setFilterText(text);
  };

  return (
    <div className="app">
      <AutoComplete items={countries} onChangeText={onChangeTextHandler} />
    </div>
  );
}

export default App;
