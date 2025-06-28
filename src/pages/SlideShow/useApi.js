import { useState, useEffect } from "react";
import axios from "axios";
const URL = "https://images-api.nasa.gov/search?q=Moon ";
function fGetImageLink(item = {}) {
  const { links = [] } = item;
  if (!links[0]) return null;
  return links[0].href;
}

function useApi() {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    async function callApi() {
      try {
        const response = await axios.get(URL);
        setImages(response);
        const {
          data: {
            collection: { items },
          },
        } = response;
        console.log("items", items);
        const links = items.map((item) => fGetImageLink(item));
        setImages(links);
      } catch (error) {
        setErrors(error);
      }
    }
    callApi();
  }, []);

  return { images, errors };
}

export { useApi };
