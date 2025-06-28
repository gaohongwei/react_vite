// This is the new code
// Use CommonTable
import { CommonTable } from "ComView";
import { LinkAF } from "ComView/Links";
import { currentUser } from "APIS/auth";
import { AuthTabPane } from "ComView/AuthView";
import { i18t } from "ComView/i18nHelper";

const ProteinList = ({ onList, listColumns, showPageHeader = true }) => {
  const createActions = [];
  const rowActions = {
    Review: {
      title: "Review",
      iconName: "zoomin",
      fLink: (row) => LinkAF.review({ id: row.name }),
    },
  };

  return (
    <CommonTable
      // actionRef={actionRef}
      // showPageHeader={true}
      tableTitle={i18t("action.Protein")}
      listColumns={listColumns}
      createActions={createActions}
      rowActions={rowActions}
      onList={onList}
      rowKey="id"
    />
  );
};

export { ProteinList };
