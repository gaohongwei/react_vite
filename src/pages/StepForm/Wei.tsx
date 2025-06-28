import { GuidedSteps, getExpSteps } from "./GuidedSteps";
import { AllSteps } from "./WeiConfig";

const Wei = () => {
  const steps = getExpSteps({ steps: AllSteps, level: "auto" });
  const initValues = {
    save_as: "current_file",
  };

  return <GuidedSteps steps={steps} initValues={initValues} />;
};
export { Wei };
