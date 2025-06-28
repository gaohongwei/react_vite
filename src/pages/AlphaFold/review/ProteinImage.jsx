import Iframe from "react-iframe";
const URLAF = "https://alphafold.ebi.ac.uk/entry";
const URLUP = "https://www.uniprot.org/uniprot";
const ProteinImage = ({ id }) => {
  const src = `${URLAF}/${id}`;
  return (
    <div>
      <Iframe src={src} width="100%" height="1500" sandbox="allow-same-origin allow-scripts" />
    </div>
  );
};

export { ProteinImage };
