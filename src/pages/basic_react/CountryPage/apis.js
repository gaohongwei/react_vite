import { useState } from "react";
import { Countries } from "./Data";
async function getCountry() {
  return new Promise((resolve, reject) => {
    resolve(Countries);
  });
}

function useGetCountry() {
  const [rows, setRows] = useState([]);
  async function getData() {
    const data = await getCountry();
    setRows(data);
  }
}

export { getCountry };
