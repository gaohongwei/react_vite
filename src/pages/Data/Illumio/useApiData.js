import { useState, useEffect } from "react";
import axios from "axios";

const AUTH =
  "ts=thesoer&apikey=d71cd59b0758975f3aed42f4df82b2e0&hash=9c24c1bb37f36e5f3ebd620f7508c95b";

// https://gateway.marvel.com:443/v1/public/characters?&<AUTH>
const BASE_URL = "https://gateway.marvel.com:443/v1/public/characters";

function useApiData() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  function getUrl(searchTerm = "") {
    if (searchTerm.length < 1) return `${BASE_URL}?&${AUTH}`;
    return `${BASE_URL}?nameStartsWith=${searchTerm}&${AUTH}`;
  }

  async function fetchData(searchTerm) {
    const url = getUrl(searchTerm);
    try {
      const reponse = await axios.get(url);

      const data = reponse.data.data.results;
      // console.log(data);
      setItems(data);
    } catch (error) {
      setError(error);
    }
  }

  function reNew(searchTerm) {
    fetchData(searchTerm);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { error, items, reNew };
}

export { useApiData };
