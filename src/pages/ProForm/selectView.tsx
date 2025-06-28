import ProForm, { ProFormRadio, ProFormCheckbox, ProFormGroup } from "@ant-design/pro-form";

const Options = [
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
];
const initialValues = {
  radioVertical: "a",
  radioButton: "a",
  radioH1: "a",
  radioH2: "a",
  radioH3: "a",
};

const style = {
  padding: 24,
};
const RadioView = () => (
  <div style={style}>
    <ProForm
      name="validate_other"
      initialValues={initialValues}
      onValuesChange={(_, values) => {
        console.log(values);
      }}
      onFinish={async (value) => console.log(value)}
    >
      <ProFormGroup label="选择类">
        <ProFormRadio.Group name="radioH1" label="RadioH" options={Options} />
        <ProFormRadio.Group
          name="radioVertical"
          layout="vertical"
          label="RadioVertical"
          options={Options}
        />
        <ProFormRadio.Group
          name="radioButton"
          label="Radio.Button"
          radioType="button"
          options={Options}
        />
      </ProFormGroup>
      <ProFormRadio.Group name="radioH2" label="RadioH" options={Options} />
      <>
        <ProFormRadio.Group name="radioH3" label="RadioH" options={Options} />
      </>
    </ProForm>
  </div>
);

const CheckboxView = () => {
  return (
    <ProForm>
      <ProFormGroup label="数字类">
        <ProFormCheckbox.Group name="checkbox-group1" label="Checkbox.Group" options={Options} />
        <ProFormCheckbox.Group
          layout="vertical"
          name="checkbox-group2"
          label="Checkbox.Group"
          options={Options}
        />
      </ProFormGroup>
    </ProForm>
  );
};
export { RadioView, CheckboxView };
