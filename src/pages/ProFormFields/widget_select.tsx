import ProForm, { ProFormSelect } from "@ant-design/pro-form";
import Mock from "mockjs";

const SelectOptions = [
  { label: "全部", value: "all" },
  { label: "未解决", value: "open" },
  { label: "已解决", value: "closed" },
  { label: "解决中", value: "processing" },
];

const EnumOptions = {
  all: { text: "全部", status: "Default" },
  open: {
    text: "未解决",
    status: "Error",
  },
  closed: {
    text: "已解决",
    status: "Success",
  },
  processing: {
    text: "解决中",
    status: "Processing",
  },
};

export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const SelectNoSearch = () => {
  return (
    <ProFormSelect
      width="md"
      fieldProps={{
        labelInValue: true,
      }}
      request={async () => SelectOptions}
      name="useMode"
      label="合同约定生效方式NoSearch"
    />
  );
};
const SelectSimple = () => {
  return <ProFormSelect.SearchSelect name="userQuery" label="查询选择器" options={SelectOptions} />;
};
const SelectWitnEnum = () => {
  return (
    <ProFormSelect.SearchSelect
      name="userQuery"
      label="查询选择器ValueEnum"
      valueEnum={EnumOptions}
    />
  );
};

const SelectWithRequest = () => {
  return (
    <ProFormSelect.SearchSelect
      name="userQuery"
      label="查询选择器Request"
      fieldProps={{
        labelInValue: true,
      }}
      request={async () => {
        return SelectOptions;
      }}
    />
  );
};

const SelectCountry = () => {
  return (
    <ProFormSelect
      name="select"
      label="SelectCountry"
      valueEnum={{
        china: "China",
        usa: "U.S.A",
      }}
      placeholder="Please select a country"
      rules={[{ required: true, message: "Please select your country!" }]}
    />
  );
};

const SelectWithApi = () => {
  return (
    <ProFormSelect
      name="select"
      label="支持搜索查询的 Select"
      showSearch
      request={async ({ keyWords }) => {
        await waitTime(1000);
        return Mock.mock({
          "data|1-10": [
            {
              value: "@id",
              label: "@name",
            },
          ],
        }).data.concat({
          value: keyWords,
          label: "目标_target",
        });
      }}
      placeholder="Please select a country"
      rules={[{ required: true, message: "Please select your country!" }]}
    />
  );
};

const SelectMultiple = () => {
  return (
    <ProFormSelect
      name="select-multiple"
      label="Select[multiple]"
      valueEnum={{
        red: "Red",
        green: "Green",
        blue: "Blue",
      }}
      fieldProps={{
        mode: "multiple",
      }}
      placeholder="Please select favorite colors"
      rules={[{ required: true, message: "Please select your favorite colors!", type: "array" }]}
    />
  );
};
export {
  SelectSimple,
  SelectWithRequest,
  SelectWitnEnum,
  SelectNoSearch,
  SelectCountry,
  SelectWithApi,
  SelectMultiple,
};
