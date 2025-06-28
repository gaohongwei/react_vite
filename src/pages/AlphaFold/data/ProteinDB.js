function fSaveProtein(protein) {
  const myProteins = fLoadProteins();
  const index = myProteins.findIndex((item) => item.name === protein.name);

  if (index > -1) {
    myProteins[index] = protein;
  } else {
    myProteins.push(protein);
  }

  console.log("newProteins", myProteins);
  localStorage.setItem("myProteins", JSON.stringify(myProteins));
}

function fLoadProteins(search) {
  const myProteinString = localStorage.getItem("myProteins");
  const myProteins = JSON.parse(myProteinString);
  if (!myProteins) return [];
  if (!search) return myProteins;
  return myProteins.filter((item) => item.name.includes(search));
}

function fLoadProtein(protein) {
  const myProteins = fLoadProteins();
  const index = myProteins.find((item) => item.name === protein.name);
  return myProteins[index];
}

export { fSaveProtein, fLoadProteins, fLoadProtein };
