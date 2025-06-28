import { useState } from "react";
import { StepsForm } from "@ant-design/pro-form";
import ProCard from "@ant-design/pro-card";
import { message } from "antd";

const GuidedSteps = ({ steps, initValues }) => {
  const [FlowConfig, setFlowConfig] = useState({});
  const [initialValues, setInitialValues] = useState(initValues);

  const onFinish = async (values) => {
    console.log(values);
    message.success("提交成功");
    return true;
  };
  const onValuesChange = (values) => {
    const newInitialValues = {
      ...initialValues,
      ...values,
    };
    console.log("newInitialValues", newInitialValues);
    setInitialValues(newInitialValues);
  };

  return (
    <ProCard>
      <StepsForm
        onFinish={onFinish}
        formProps={{
          validateMessages: {
            required: "此项为必填项",
          },
        }}
      >
        {steps.map((step) => {
          const { name, props, page: CurrentPage } = step;
          return (
            <StepsForm.StepForm<{
              name: string;
            }>
              name={name}
              title={name}
              {...props}
              FlowConfig={FlowConfig}
              setFlowConfig={setFlowConfig}
              onValuesChange={onValuesChange}
              initialValues={initialValues}
            >
              <CurrentPage />
            </StepsForm.StepForm>
          );
        })}
      </StepsForm>
    </ProCard>
  );
};

const getExpSteps = ({ steps, level = "auto" }) => {
  return steps.filter((step) => step["level"].includes(level));
};

export { GuidedSteps, getExpSteps };
