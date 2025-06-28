import "./style.css";
import MyImage from "src/assets/help/HistoryVars.png";

const FlexObj = () => {
  const ar = Array(7).fill();
  return (
    <div className="container">
      {ar.map((item, index) => {
        const clsName = `box box-${index + 1}`;
        return (
          <div className={clsName}>
            <img src={MyImage} style={{ width: "100%", height: "100%" }} />
          </div>
        );
      })}
    </div>
  );
};

export { FlexObj };
