import React, { useState, useEffect } from "react";
import { existingDataPromise, newDataPromise } from "./API.ts";
function useApi() {
  const [customer, setCustomer] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const customerData = await existingDataPromise;

        setCustomer(customerData);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  async function refresh() {
    try {
      setLoading(true);
      const customerData = await newDataPromise;

      setCustomer(customerData);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }
  return { loading, error, customer, refresh };
}

export { useApi };
