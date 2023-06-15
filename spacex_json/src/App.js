import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const [data, setData] = useState([]);
  const [duplicateData, setDuplicateData] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filterFlag, setFilterFlag] = useState(false);
  const [sortflag, setSortflag] = useState(false);

  useEffect(() => {
    let mydata = fetch("https://api.spacexdata.com/v4/launches/past");
    mydata
      .then((res) => {
        return res.json();
      })
      .then((item) => {
        setData(item);
        setDuplicateData(item);
      });
  }, []);

  function handleFilter() {
    if (filterFlag === false) {
      const filtered = data.filter((i) => i.success === false);
      setData(filtered);
      setFilterFlag(true);
    } else {
      setData(duplicateData);
      setFilterFlag(false);
    }
  }
  function handleSortName() {
    let copy_data = [...data];
    if (sortflag === false) {
      copy_data.sort((p1, p2) => {
        if (p1.name < p2.name) {
          return -1;
        } else {
          return 1;
        }
      });
      setData(copy_data);
      setSortflag(true);
    } else {
      setData(duplicateData);
      setSortflag(false);
    }
  }

  function handleHome() {
    setData(duplicateData);
  }

  return (
    <div>
      <div className="header_buttons">
        <label>Search Satellite :- </label>
        <input
          type="search"
          onChange={(e) => setSearchString(e.target.value)}
        ></input>
        <button onClick={handleHome}>Home</button>
        <button onClick={handleSortName}>
          {sortflag === true ? `Un Sort by Names` : `Sort by Names`}
        </button>
        <button onClick={handleFilter}>
          {filterFlag === true ? `Un Sort by Status` : `Sort by Status`}
        </button>
      </div>

      {data
        .filter((i) => i.name.toLowerCase().includes(searchString))
        .map((item) => {
          return (
            <Card
              name={item.name}
              rocket_id={item.rocket}
              success={item.success}
              flight_number={item.flight_number}
              date={item.date_utc}
              image_url={item.links.patch.small}
              article={item.links.article}
              wikipedia={item.links.wikipedia}
              youtube={item.links.webcast}
            />
          );
        })}
    </div>
  );
}

export default App;
