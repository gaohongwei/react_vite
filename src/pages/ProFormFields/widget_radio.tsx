import ProForm, { ProFormRadio } from "@ant-design/pro-form";
import Mock from "mockjs";

const RadioH = ({ direction = "vertical", radioType }) => {
  return (
    <ProFormRadio.Group
      name="radio"
      label="Radio.Group H"
      layout={direction}
      radioType={radioType}
      options={[
        {
          label: "item 1",
          value: "a",
        },
        {
          label: "item 2",
          value: "b",
        },
        {
          label: "item 3",
          value: "c",
        },
      ]}
    />
  );
};

export { RadioH };
