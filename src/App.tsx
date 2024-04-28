import React, { useEffect, useState } from "react";
import "./App.css";
import AutoComplete from "./components/AutoComplete/AutoComplete";
import { getCountries } from "./mockApi/countries-api";

function App() {
  const [countries, setCountries] = useState<string[]>([]);
  const [filterText, setFilterText] = useState<string>("nig");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries(filterText);
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, [filterText]);

  return (
    <div className="App">
      <AutoComplete items={countries} onChangeText={() => {}} />
    </div>
  );
}

export default App;
