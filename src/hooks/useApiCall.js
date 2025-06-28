import { useEffect, useState } from "react";

// sleep
function waitTime(msSeconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("done"), msSeconds);
  });
}

// apiCall is a memorized function
function useApiCall(apiCall) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      console.log("Called api");
      setIsLoading(true);
      await waitTime(1000);
      try {
        //throw new Error("Something wrong");
        //throw "The second argument must be a number";
        const repsonse = await apiCall();
        console.log(repsonse);
        setData(repsonse);
      } catch (error) {
        console.log("error:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [apiCall]);

  return { data, error, isLoading };
}

export default useApiCall;
