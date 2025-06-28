import { Form, Input, InputNumber, Button, Select, Radio, message } from "antd";

import { ComForm, FormItem, FormLabels } from "ComView/Form";

import { i18tMessage } from "ComView";

import { fSaveProtein, fLoadProteins, fLoadProtein } from "../data/ProteinDB";

const ProteinEdit = ({ row, setRow }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const p = { ...row, ...values };
    console.log("values", p);
    fSaveProtein(p);
    setRow(p);
  };

  const showConfig = {
    name: {},
  };

  return (
    <ComForm form={form} onFinish={onFinish} initialValues={row}>
      {FormLabels({ obj: row, showConfig })}
      <FormItem name="spiece" required={true}>
        <Input />
      </FormItem>
      <FormItem name="function" required={true}>
        <Input />
      </FormItem>
      <FormItem name="location" required={true}>
        <Input />
      </FormItem>
      <FormItem name="pathology" required={true}>
        <Input />
      </FormItem>
      <FormItem name="ptm" required={true}>
        <Input />
      </FormItem>
    </ComForm>
  );
};

export { ProteinEdit };
