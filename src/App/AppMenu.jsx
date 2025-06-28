import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { getIcon } from "./helper";

export const createAntdMenuItems = (menuConfig) => {
  return menuConfig.map((item) => {
    const { path, name, icon, routes } = item;

    const menuItem = {
      key: path || name,
      label: name,
      icon: getIcon(icon)
    };

    if (path) {
      menuItem.label = <Link to={path}>{name}</Link>;
    }

    if (routes) {
      menuItem.children = createAntdMenuItems(routes);
    }

    return menuItem;
  });
};

const AppMenu = ({ menuConfig }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleStatus = () => setCollapsed((collapsed) => !collapsed);

  const menuItems = createAntdMenuItems(menuConfig);
  return (
    <div style={{ width: 256 }}>
      {/* <Button
        type="primary"
        onClick={toggleStatus}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button> */}
      <Menu
        theme="light"
        mode="inline"
        inlineCollapsed={collapsed}
        style={{ height: "100vh" }}
        items={menuItems}
      />
    </div>
  );
};

export { AppMenu };
