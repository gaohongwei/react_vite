import { useState } from "react";
import allData from "./sentences.json";
import "./styles.css";

export function HitSearch() {
  const [query, setQuery] = useState("");
  return (
    <div className="search_page">
      <SearchArea setQuery={setQuery} />
      <DisplaySentences sentences={allData} query={query} />
    </div>
  );
}

function DisplaySentences({ sentences, query }) {
  return (
    <div className="sentences">
      {sentences.map(({ id, data }) => {
        const hasMatch = query && data.includes(query);
        const className = hasMatch ? "sentence match" : "sentence";
        return (
          <div key={id} className={className}>
            {data}
          </div>
        );
      })}
    </div>
  );
}

function SearchArea({ setQuery }) {
  return (
    <span>
      Search:
      <input onChange={(e) => setQuery(e.target.value)} />
    </span>
  );
}
