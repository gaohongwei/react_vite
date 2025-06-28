import { useParams } from "react-router";
import { AuthTabPane } from "ComView/AuthView";
import { ProteinImage } from "./ProteinImage";
import { ProteinAttr } from "./ProteinAttr";
import { ProteinEdit } from "./ProteinEdit";
import { fListAll } from "../data";
import { useGetProtein } from "../data/useGetProtein";

const ReviewProtein = () => {
  const { id } = useParams();
  const { row, setRow } = useGetProtein(id);
  console.log("row", row);
  const tabsConfig = [
    {
      label: "ProteinAttr",
      child: <ProteinAttr row={row} />,
    },
    {
      label: "Folding",
      child: <ProteinImage id={id} />,
    },

    {
      label: "ProteinEdit",
      child: <ProteinEdit row={row} setRow={setRow} />,
    },
  ];
  return <AuthTabPane tabs={tabsConfig} activeKey="Folding" />;
};

export default ReviewProtein;
