import { Select } from "antd";
import { useLangContext } from "../../HOC/LangProvider";
import { LANG_OPTIONS } from "../config/headerConfig";

export const LangSelector = () => {
  const { lang, setLang } = useLangContext();

  return (
    <Select
      value={lang}
      onChange={setLang}
      className="your-tailwind-class-or-any-other-class" // replace or use your CLASSES.langSelect
      aria-label="Select language"
    >
      {LANG_OPTIONS.map(({ value, label }) => (
        <Select.Option key={value} value={value}>
          {label}
        </Select.Option>
      ))}
    </Select>
  );
};
