import React from "react";
import ProForm, {
  ProFormSwitch,
  ProFormText,
  ProFormRadio,
  ProFormCheckbox,
  ProFormRate,
  ProFormDatePicker,
  ProFormSelect,
  ProFormDigit,
  ProFormDateTimePicker,
  ProFormSlider,
  ProFormDateTimeRangePicker,
  ProFormDateRangePicker,
  ProFormUploadButton,
  ProFormUploadDragger,
  ProFormFieldSet,
  ProFormTimePicker,
} from "@ant-design/pro-form";
import Mock from "mockjs";

import {
  SelectSimple,
  SelectWithRequest,
  SelectWitnEnum,
  SelectNoSearch,
  SelectCountry,
  SelectWithApi,
  SelectMultiple,
} from "./widget_select";

import { RadioH } from "./widget_radio";
const Demo = () => {
  const initialValues = {
    "input-number": 3,
    "checkbox-group": ["A", "B"],
    rate: 3.5,
    name: "qixian",
    radio: "a",
    "radio-button": "a",
  };
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <ProForm
        layout="horizontal"
        name="validate_other"
        initialValues={initialValues}
        onValuesChange={(_, values) => {
          console.log(values);
        }}
        onFinish={async (value) => console.log(value)}
      >
        <ProFormText width="md" name="name" label="name" />
        <SelectCountry />
        <SelectWithApi />
        <SelectNoSearch />
        <ProForm.Group>
          <SelectSimple />
          <SelectWithRequest />
          <SelectWitnEnum />
        </ProForm.Group>

        <SelectMultiple />
        <ProFormDigit label="InputNumber" name="input-number" width="sm" min={1} max={10} />
        <ProFormSwitch name="switch" label="Switch" />
        <ProFormSlider
          name="slider"
          label="Slider"
          marks={{
            0: "A",
            20: "B",
            40: "C",
            60: "D",
            80: "E",
            100: "F",
          }}
        />
        <RadioH direction="abc" />
        <RadioH direction="vertical" />
        <RadioH direction="vertical" radioType="button" />

        <ProFormCheckbox.Group
          name="checkbox-group"
          label="Checkbox.Group"
          options={["A", "B", "C", "D", "E", "F"]}
        />
        <ProFormRate name="rate" label="Rate" />
        <ProFormUploadButton
          name="upload"
          label="Upload"
          max={2}
          action="/upload.do"
          extra="longgggggggggggggggggggggggggggggggggg"
        />
        <ProFormFieldSet
          name="list"
          label="组件列表"
          transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
        >
          <ProFormText width="md" />
          <ProFormText width="md" />
          <ProFormText width="md" />
        </ProFormFieldSet>
        <ProForm.Group title="日期相关分组">
          <ProFormDatePicker name="date" label="日期" />
          <ProFormTimePicker name="time" label="时间" />
          <ProFormTimePicker.RangePicker name="timeRange" label="时间区间" />
          <ProFormDatePicker.Week name="dateWeek" label="周" />
          <ProFormDatePicker.Month name="dateMonth" label="月" />
          <ProFormDatePicker.Quarter name="dateQuarter" label="季度" />
          <ProFormDatePicker.Year name="dateYear" label="年" />
          <ProFormDateTimePicker name="dateTime" label="日期时间" />
          <ProFormDateRangePicker name="dateRange" label="日期区间" />
          <ProFormDateTimeRangePicker name="dateTimeRange" label="日期时间区间" />
        </ProForm.Group>
        <ProFormUploadDragger max={4} label="Dragger" name="dragger" />
      </ProForm>
    </div>
  );
};

export default Demo;
