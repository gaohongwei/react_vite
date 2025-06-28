import { ProteinData } from "./ProteinData";
import { fSaveProtein, fLoadProteins, fLoadProtein } from "./ProteinDB";
function fListData(data) {
  return new Promise(function (resolve, reject) {
    const response = { data, success: true, total: data.length, current: 1 };
    resolve(response);
  });
}

function fFilterData(AllData, search) {
  if (!search) return AllData;
  return AllData.filter((item) => item.name.includes(search));
}

function fListAll(params) {
  const { name: search } = params;
  const filteredData = fFilterData(ProteinData, search);
  return fListData(filteredData);
}

function fLoadMine(params) {
  const { name: search } = params;
  const myProteins = fLoadProteins();
  const filteredData = fFilterData(myProteins, search);
  return fListData(filteredData);
}

function fFindProtein(proteinName) {
  const myProteins = fLoadProteins();
  let index = myProteins.findIndex((item) => item.name === proteinName);
  if (index >= 0) return myProteins[index];
  index = ProteinData.findIndex((item) => item.name === proteinName);
  return ProteinData[index];
}

export { fListAll, fLoadMine, fFindProtein };
