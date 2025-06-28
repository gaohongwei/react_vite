import { ExperimentOutlined } from "@ant-design/icons";
import { NAV_LINKS, CLASSES } from "../config/headerConfig";
import { UserProfileDropdown } from "./UserProfileDropdown";
import { LangSelector } from "./LangSelector";

export const AppHeader = () => {
  return (
    <header className={CLASSES.header}>
      {/* Title with AntD Icon */}
      <div className={CLASSES.titleContainer}>
        <ExperimentOutlined className="text-blue-600 text-lg" />
        <div className="ml-2">
          <div className="font-bold text-lg text-blue-600 leading-tight">
            Build reusable UI
          </div>
          <div className="text-sm text-gray-500 leading-tight">
            React,vite,antd,tailwind
          </div>
        </div>
      </div>

      <nav>
        <ul className={CLASSES.navList}>
          {NAV_LINKS.map(({ key, label, href }) => (
            <li key={key}>
              <a href={href} className={CLASSES.navLink}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <UserProfileDropdown />
          </li>
          <li>
            <LangSelector />
          </li>
        </ul>
      </nav>
    </header>
  );
};
