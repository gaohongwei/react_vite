import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const wrapperCol = {
  offset: 8,
  span: 16,
};

const formStyle = { width: "500px" };

const rules = [{ required: true, message: "Please input data!" }];

const Basic = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onValuesChange = (values) => {
    console.log("onValuesChange", values);
  };

  return (
    <div style={formStyle}>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
      >
        <Form.Item label="Username" name="username" rules={rules}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={wrapperCol}>
          <Checkbox>Remember me</Checkbox>
          <Checkbox>Remember you</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={wrapperCol}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { Basic };
