import { message } from "antd";
import ProForm, { ProFormText } from "@ant-design/pro-form";

const FormWei = () => {
  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
      }}
    >
      <div
        style={{
          marginTop: 12,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Ant Design 是西湖区最具影响力的 Web 设计规范
      </div>
      <ProForm
        layout="horizontal"
        labelCol={{ span: 12 }}
        onFinish={async () => {
          message.success("提交成功");
        }}
        submitter={{
          searchConfig: {
            submitText: "登录",
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            size: "large",
            style: {
              offset: 12,
              width: "50%",
              align: "auto",
            },
          },
        }}
      >
        <ProFormText label="Name" name="name" placeholder="Input Name" />
        <ProFormText label="password" name="password" placeholder="password" />
      </ProForm>
    </div>
  );
};

export { FormWei };
