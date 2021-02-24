import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "./Grid";
import Header from "./Header";
import Search from "./Search";
import Select from "./Select";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  console.log(items);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://restcountries.eu/rest/v2/all`);
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  const filterCountries = items.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Select />
      <Grid isLoading={isLoading} filter={filterCountries} />
    </div>
  );
}

export default App;
