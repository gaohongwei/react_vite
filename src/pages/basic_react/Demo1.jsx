import { useState } from "react";
import { Form, Input, Select, Button } from "antd";

const FormConfig = {
  common: ["hostname"],
  oracle: ["user", "password"],
  mysql: ["user", "password"],
};
const Vendors = ["oracle", "mysql", "pgsql"];
function fArrayToOptions(ar) {
  return ar.map((item) => ({ value: item }));
}
const OracleDS = () => {
  const [vendor, setVendor] = useState();
  const onFinish = (values) => {
    console.log("onFinish", values);
  };
  const onValuesChange = (values) => {
    const { vendor } = values;
    if (vendor) {
      setVendor(vendor);
    }
  };

  const isVendor = (yourName) => yourName === vendor;

  return (
    <div>
      <Form onFinish={onFinish} onValuesChange={onValuesChange}>
        <Form.Item name="vendor" label="Vendors">
          <Select options={fArrayToOptions(Vendors)} />
        </Form.Item>
        <Form.Item name="hostname" label="Hostname">
          <Input />
        </Form.Item>
        <Form.Item name="instance" label="Instance Name">
          <Input />
        </Form.Item>
        {isVendor("oracle") && (
          <Form.Item name="user" label="User Name">
            <Input />
          </Form.Item>
        )}
        {isVendor("mysql") && (
          <>
            <Form.Item name="user" label="User Name">
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input />
            </Form.Item>
          </>
        )}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { OracleDS };
