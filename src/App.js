import React, { useState } from "react";
import "./App.css";
import Table from './Components/Table';

const queries = [
  "headphones",
  "smartphones",
  "laptops",
  "smartwatches",
  "cameras",
  "gaming_consoles",
  "bluetooth_speakers",
  "monitors",
  "keyboards",
  "drones"
];

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`/${query}.json`);
      const jsonData = await response.json();
      setData(jsonData.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Amazon Scraper</h1>
      <div className="buttons">
        {queries.map((query) => (
          <button key={query} onClick={() => fetchData(query)}>
            {query.replace("_", " ").toUpperCase()}
          </button>
        ))}
      </div>
      {loading ? <p>Loading...</p> : <Table data={data} />}
    </div>
  );
}

export default App;
