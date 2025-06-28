import ProForm, {
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormDateRangePicker,
} from "@ant-design/pro-form";
const Options1 = [];

const OptionsRemark = [
  {
    value: "1",
    label: "策略一",
  },
  { value: "2", label: "策略二" },
];

const OptionsRemark2 = [
  {
    value: "1",
    label: "策略一",
  },
  { value: "2", label: "策略二" },
];

const OptionCbox1 = ["结构迁移", "全量迁移", "增量迁移", "全量校验"];
const OptionCbox2 = ["完整 LOB", "不同步 LOB", "受限制 LOB"];

const RuleRequired = {
  required: true,
};
const Step1 = () => {
  return (
    <>
      <ProFormText
        name="name"
        label="实验名称"
        width="md"
        tooltip="最长为 24 位，用于标定的唯一 id"
        placeholder="请输入名称"
        rules={[RuleRequired]}
      />
      <ProFormDatePicker name="date" label="日期" />
      <ProFormDateRangePicker name="dateTime" label="时间区间" />
      <ProFormTextArea name="remark" label="备注" width="lg" placeholder="请输入备注" />
    </>
  );
};

const Step2 = () => {
  return (
    <>
      <ProFormCheckbox.Group name="checkbox" label="迁移类型" width="lg" options={OptionCbox1} />
      <ProForm.Group>
        <ProFormText name="dbname" label="业务 DB 用户名" />
        <ProFormDatePicker name="datetime" label="记录保存时间" width="sm" />
        <ProFormCheckbox.Group name="checkbox" label="迁移类型" options={OptionCbox2} />
      </ProForm.Group>
    </>
  );
};

const Step3 = () => {
  return (
    <>
      <ProFormCheckbox.Group
        name="checkbox"
        label="部署单元"
        rules={[RuleRequired]}
        options={["部署单元1", "部署单元2", "部署单元3"]}
      />
      <ProFormSelect
        label="部署分组策略"
        name="remark"
        rules={[RuleRequired]}
        initialValue="1"
        options={OptionsRemark}
      />
      <ProFormSelect
        label="Pod 调度策略"
        name="remark2"
        initialValue="2"
        options={OptionsRemark2}
      />
    </>
  );
};

const AllSteps = [
  {
    level: ["auto", "manual"],
    name: "Step111",
    page: Step1,
  },
  {
    level: ["auto", "manual"],
    name: "Step2",
    page: Step2,
  },
  {
    level: ["auto", "manual"],
    name: "Step3",
    page: Step3,
  },
];

export { AllSteps };
