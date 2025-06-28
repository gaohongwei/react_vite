import { Select } from "antd";
import "./Header.css";
import { useLangContext } from "../HOC/LangProvider";

const { Option } = Select;

const Header = () => {
  const { lang, setLang } = useLangContext();
  return (
    <div className="header">
      <div className="left">
        <h3>This is a demo</h3>
      </div>
      <div className="right">
        <ul className="navigation">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <Select defaultValue={lang} onChange={setLang}>
              <Option value="english">english</Option>
              <Option value="chinese">chinese</Option>
              <Option value="pt">pt</Option>
            </Select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
