import React from "react";
import { Dropdown, message } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { USER_MENU_ITEMS } from "../config/headerConfig";

interface UserProfileDropdownProps {
  username?: string;
}

export const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({
  username = "User",
}) => {
  const handleUserMenuClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "profile":
        window.location.href = "/profile";
        break;
      case "settings":
        window.location.href = "/settings";
        break;
      case "logout":
        message.success("Logged out!");
        // Add logout logic here (e.g., clear tokens)
        window.location.href = "/logout";
        break;
      default:
        break;
    }
  };

  return (
    <Dropdown
      menu={{ items: USER_MENU_ITEMS, onClick: handleUserMenuClick }}
      placement="bottomRight"
      arrow
    >
      <button className="user-button-class">
        <UserOutlined className="mr-1" />
        <span className="user-text-class">{username}</span>
        <DownOutlined className="ml-1" />
      </button>
    </Dropdown>
  );
};
