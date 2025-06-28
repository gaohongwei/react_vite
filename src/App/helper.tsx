import { lazy, Suspense } from "react";
import {
  AppstoreOutlined,
  ApiOutlined,
  TableOutlined,
  MailOutlined,
  SettingOutlined,
  DatabaseOutlined,
  HomeOutlined,
  WarningOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

function getIcon(iconName) {
  if (!iconName) return null;
  switch (iconName) {
    case "AppstoreOutlined":
      return <AppstoreOutlined />;
    case "DatabaseOutlined":
      return <DatabaseOutlined />;
    case "HomeOutlined":
      return <HomeOutlined />;
    case "TableOutlined":
      return <TableOutlined />;
    case "MailOutlined":
      return <MailOutlined />;
    case "SettingOutlined":
      return <SettingOutlined />;
    case "LoadingOutlined":
      return <LoadingOutlined />;
    case "ApiOutlined":
      return <ApiOutlined />;
    case "WarningOutlined":
      return <WarningOutlined />;
    default:
      return null;
  }
}

// loader: ()=>import('component_path')
function getComponent({ loader, element }) {
  let loadedComponent;
  if (loader) {
    const Loaded = lazy(loader);
    loadedComponent = <Loaded />;
  } else if (element) {
    return <>{element}</>;
  } else {
    return <div>Error,Not loaded</div>;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>{loadedComponent}</Suspense>
  );
}
export { getIcon, getComponent };
