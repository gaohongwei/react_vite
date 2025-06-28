import { AuthTabPane } from "ComView/AuthView";
import { ResourceTable } from "./ResourceTable";
const ExtResource = () => {
  const tabsConfig = [
    {
      label: "ExtResource",
      child: <ResourceTable />,
    },
  ];
  return <AuthTabPane tabs={tabsConfig} activeKey="ExtResource" />;
};

export { ExtResource };
