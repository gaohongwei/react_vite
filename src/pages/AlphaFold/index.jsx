import { AuthTabPane } from "ComView/AuthView";
import { ProteinList } from "./ProteinList";
import { fListAll, fLoadMine } from "./data";
import { ListIndexColumns, ListMyColumns } from "./columns/list_columns";

const AfIndex = () => {
  const tabsConfig = [
    {
      label: "MyProtein",
      child: <ProteinList onList={fLoadMine} listColumns={ListMyColumns} />,
    },
    {
      label: "AllProtein",
      child: <ProteinList onList={fListAll} listColumns={ListIndexColumns} />,
    },
  ];
  return <AuthTabPane tabs={tabsConfig} activeKey="MyProtein" />;
};

export default AfIndex;
