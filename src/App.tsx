import React, { useEffect, useState } from "react";
import "./App.css";
import AutoComplete from "./components/AutoComplete/AutoComplete";
import { getCountries } from "./mockApi/countries-api";

function App() {
  const [countries, setCountries] = useState<string[]>([]);
  const [filterText, setFilterText] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries(filterText);
        console.log(data);
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, [filterText]);

  const onChangeTextHandler = (text: string) => {
    setFilterText(text);
  };

  return (
    <div className="App">
      <AutoComplete items={countries} onChangeText={onChangeTextHandler} />
    </div>
  );
}

export default App;
