import { useState, useEffect } from "react";
import { fFindProtein } from "./";
function useGetProtein(protein) {
  const [row, setRow] = useState({});

  const fetchProtein = async (p) => {
    const found = fFindProtein(p);
    setRow(found);
  };
  useEffect(() => {
    fetchProtein(protein);
  }, [protein]);

  return { row, setRow };
}

export { useGetProtein };
