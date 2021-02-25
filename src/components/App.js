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
  console.log(query);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://restcountries.eu/rest/v2/all`);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  const filterCountries = items.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  const filterRegions = items.filter((item) => {
    return item.region.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Select getQuery={(q) => setQuery(q)} />
      <Grid
        isLoading={isLoading}
        filterCountries={filterCountries}
        filterRegions={filterRegions}
      />
    </div>
  );
}

export default App;
