import type { MenuProps } from "antd";

export const NAV_LINKS = [
  { key: "home", label: "Home", href: "#" },
  { key: "about", label: "About", href: "#" },
  { key: "products", label: "Products", href: "#" },
  { key: "contact", label: "Contact", href: "#" },
];

export const LANG_OPTIONS = [
  { value: "english", label: "English" },
  { value: "chinese", label: "Chinese" },
  { value: "pt", label: "Portuguese" },
];

// Menu items use React elements so import here to avoid circular deps in Header
export const USER_MENU_ITEMS: MenuProps["items"] = [
  {
    key: "profile",
    label: <a href="/profile">Profile</a>,
  },
  {
    key: "settings",
    label: <a href="/settings">Settings</a>,
  },
  {
    type: "divider",
  },
  {
    key: "logout",
    label: <a href="/logout">Logout</a>,
  },
];

export const CLASSES = {
  header: "flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md",
  titleContainer:
    "flex items-center text-xl font-semibold text-gray-800 space-x-2",
  navList: "flex space-x-6 items-center",
  navLink: "text-gray-700 hover:text-blue-600 transition",
  userButton:
    "flex items-center text-gray-700 hover:text-blue-600 transition focus:outline-none",
  userText: "hidden sm:inline",
  langSelect: "w-28",
};
