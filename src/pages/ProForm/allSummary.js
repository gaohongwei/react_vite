const Summary = {
  introduction: [
    "表单联动或者做一些依赖，可以使用 render props 模式, ProFormDependency 绝对是最好的选择",
    "ProForm 的 onFinish 是个 Promise，如果你正常返回会自动为你设置按钮的加载效果",
    "如果想要监听某个值，建议使用 onValuesChange",
    "ProForm 没有黑科技，只是 antd 的 Form 的封装，如果要使用自定义的组件可以用 Form.Item 包裹后使用，支持混用",
    "ProForm 在Form 的基础上增加一些语法糖和更多的布局设置。同时添加一些默认行为，让我们的表单默认好用。",
  ],
  initialValues: [
    "设置默认值，请使用 initialValues",
    "initialValues for form",
    "任何直接使用组件 value 和 onChange 的方式都有可能导致值绑定失效。",
  ],

  "ProForm.Group": "put multiple in one line",

  input: ["ProFormText", "ProFormSelect"],

  attributes: {
    name: ["common var", "can be nested, {['contract', 'name']}"],
    width: "md,sm,xs",
    tooltip: "Help",
    show: "readonly,disabled",
    other: "label,placeholder",
  },
  layout: {},

  submitter: "Can define multiple buttons",
  formRef: ["formRef?.current?.getFieldValue('company')", "formRef?.current?.setFieldsValue"],
  form_level: {
    layout: "horizontal",
    labelCol: "",
  },
};

export { Summary };
