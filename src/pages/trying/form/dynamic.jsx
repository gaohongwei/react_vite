import React, { useState } from "react";
import { Form, Input, Button, Select, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const DynamicForm = () => {
  const [form] = Form.useForm();
  const [initValues, setInitValues] = useState({});
  const onRequiredTypeChange = (values) => {
    console.log("onRequiredTypeChange", values);
    setInitValues({ ...initValues, ...values });
  };

  const { fileType } = initValues;

  const onFinish = (values) => console.log("values", values);
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initValues}
      onFinish={onFinish}
      onValuesChange={onRequiredTypeChange}
    >
      <Form.Item label="SelecFileType" name="fileType">
        <Radio.Group>
          <Radio value="pf">PredictFile</Radio>
          <Radio value="tf">TrainFile</Radio>
          <Radio value="upload">UploadPredictFile</Radio>
        </Radio.Group>
      </Form.Item>
      {fileType === "pf" && (
        <Form.Item label="PF Name" name="pf_name" rules={[{ required: true }]}>
          <Select placeholder="Please select a PF">
            <Option value="pf1">pf1</Option>
            <Option value="pf2">pf2</Option>
          </Select>
        </Form.Item>
      )}
      {fileType === "tf" && (
        <Form.Item label="TF" name="tf_name">
          <Select placeholder="Please select a TF">
            <Option value="tf1">tf1</Option>
            <Option value="tf2">tf2</Option>
          </Select>
        </Form.Item>
      )}

      {fileType && (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default DynamicForm;
