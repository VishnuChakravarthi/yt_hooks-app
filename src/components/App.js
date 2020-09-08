import React, { useState, useEffect } from "react";
import "../css/main.css";
import axios from "../Api/Youtube";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";

const KEY = "Your Api Key";

export default () => {
  const [term, setTerm] = useState("cars");
  const [click, setClick] = useState("");
  const [selected, setSelected] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const req = async () => {
      const { data } = await axios.get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          key: KEY,
        },
      });
      //   console.log(data);
      setResults(data.items);
      setSelected(data.items[0]);
    };
    req();
  }, [click]);

  return (
    <div className="ui container">
      <SearchBar
        setTerm={setTerm}
        term={term}
        click={click}
        setClick={setClick}
      />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoPlayer video={selected} />
          </div>
          <div className="five wide column">
            <VideoList results={results} setSelected={setSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};
