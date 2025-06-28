import React, { useEffect, useState } from "react";

import type { ProColumns } from "@ant-design/pro-table";
import { Input, Select } from "antd";
import { Options2, Options3, State } from "./data";
type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const MySelect: React.FC<{
  state: {
    type: number;
  };
  /** Value 和 onChange 会被自动注入 */
  value?: string;
  onChange?: (value: string) => void;
}> = (props) => {
  const { state } = props;

  const [innerOptions, setOptions] = useState<
    {
      label: React.ReactNode;
      value: number;
    }[]
  >([]);

  useEffect(() => {
    const { type } = state || {};
    if (type === 2) {
      setOptions(Options2);
    } else {
      setOptions(Options3);
    }
  }, [JSON.stringify(state)]);

  return <Select options={innerOptions} value={props.value} onChange={props.onChange} />;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: "序号",
    dataIndex: "index",
    valueType: "indexBorder",
  },
  {
    title: "状态",
    dataIndex: "state",
    initialValue: 1,
    valueType: "select",
    request: async () => State,
  },
  {
    title: "动态表单",
    key: "direction",
    hideInTable: true,
    dataIndex: "direction",
    renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
      if (type === "form") {
        return null;
      }
      const stateType = form.getFieldValue("state");
      if (stateType === 3) {
        return <Input />;
      }
      return (
        <MySelect
          {...rest}
          state={{
            type: stateType,
          }}
        />
      );
    },
  },
];

export { columns };
