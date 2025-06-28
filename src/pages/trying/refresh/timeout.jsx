import { useState, useEffect } from "react";
import { Spin } from "antd";

const TimeoutApp = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = (curCount) => {
    console.log("curCount", curCount);
    const newCount = curCount + 1;
    setCount(newCount);
    if (curCount < 10) {
      setTimeout(() => fetchData(newCount), 1000);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => fetchData(count), []);
  return (
    <div>
      {loading && <Spin />}
      {`Count  ${count}`}
    </div>
  );
};

export default TimeoutApp;
