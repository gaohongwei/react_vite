import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { debounce } from "lodash";

import { getCountry } from "./apis";

import { Countries } from "./Data";

const CountryPage = () => {
  const [rows, setRows] = useState([{}]);

  const fFilter = (filter) => {
    if (!filter) return Countries;
    return Countries.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
  };
  const onOldChange = (event) => {
    const value = event.target.value;
    setRows(fFilter(value));
  };

  const onDelayedChange = debounce(onOldChange, 2000);
  // const onChange = (event) => {};
  const onFocus = () => {
    setRows(Countries);
  };

  const onChange = onDelayedChange;
  //    onChange = onDelayedChange;
  return (
    <div>
      <Input placeholder="search" onChange={onChange} onFocus={onFocus} />
      <ul>
        {rows.map((row) => (
          <li key={row.code}>{row.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { CountryPage };
