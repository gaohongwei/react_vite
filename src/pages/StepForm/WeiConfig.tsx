import ProCard from "@ant-design/pro-card";
import ProForm, {
  ProFormText,
  ProFormSelect,
  ProFormDigit,
  ProFormRadio,
} from "@ant-design/pro-form";
import { Divider } from "antd";
const optionsSaveAs = [
  {
    label: "覆盖当前文件",
    value: "current_file",
  },
  {
    label: "另存为",
    value: "new_file",
  },
];

const DeleteData = ({ columnData = [] }) => {
  const requiredColumnOptions = columnData.map((item) => ({
    label: `${item["column_name"]}(${item["data_type"]})`,
    value: item["column_name"],
  }));

  return (
    <ProCard column={2}>
      <ProCard bordered headerBordered collapsible title="如果以下任一条件成立，删除相关列">
        <ProFormDigit width="xs" name="missing_pct_in_column" label="缺省的行数/总行数(%) >" />
        <ProFormSelect
          width="md"
          mode="multiple"
          request={async () => requiredColumnOptions}
          name="useless_column"
          label="不需要的列"
        />
      </ProCard>

      <ProCard bordered headerBordered collapsible title="如果以下任一条件成立，删除相关行">
        <ProFormDigit width="xs" name="missing_pct_in_row" label="缺省的列数/总列数(%) >" />
        <ProFormSelect
          width="md"
          mode="multiple"
          request={async () => requiredColumnOptions}
          name="required_column"
          label="必须有数据的列"
        />
      </ProCard>
    </ProCard>
  );
};

const SaveChange = () => {
  return (
    <>
      <ProFormRadio.Group name="save_as" label="保存修改" options={optionsSaveAs} />
      {false && (
        <ProFormText
          name="new_file_name"
          label="新文件名"
          width="md"
          tooltip="新文件名"
          placeholder="请输入名称"
          rules={[{ required: true }]}
        />
      )}
    </>
  );
};

const AllSteps = [
  {
    level: ["auto", "manual"],
    name: "DeleteData",
    page: DeleteData,
  },
  {
    level: ["auto", "manual"],
    name: "SaveDataView",
    page: SaveChange,
  },
];

export { AllSteps };
