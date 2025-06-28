const Summary = {
  form: { collect_value: "onValuesChange" },
  item: {
    listen: "onChange",
    set_value: [
      "set default value with initialValues",
      "setFieldsValue dynamically",
      "dont use useState",
    ],
    dependencies: ["Used when there are dependencies between fields"],
    shouldUpdate: [
      "any Form update will cause the Form.Item to be re-rendered",
      "if it is a function, it will be called by form values update. Providing original values and current value to compare. This is very helpful for rendering additional fields based on values:",
    ],
  },
  layout: {
    type: {
      inline: "Put all in the same line",
      horizontal: "label and data in the one line",
      vertical: "label and data in the two line",
    },
    wrapperCol: [
      "控制button,input(checkbox, radiobutton)布局",
      "input controls",
      "same as with <Col>",
      "Form or item level",
    ],

    labelCol: [
      "控制label布局",
      "Label layout",
      "same as with <Col>",
      "{span: 3, offset: 12} or sm: {span: 3, offset: 12}",
      "Form or item level",
    ],
  },
  select: {
    TreeSelect: "TreeSelect",
    Cascader: "Cascader",
  },
  input: ["InputNumber", "Switch"],
};

export { Summary };
