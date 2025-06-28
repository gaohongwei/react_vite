import { GuidedSteps, getExpSteps } from "./GuidedSteps";
import { AllSteps } from "./sampleConfig";

const SampleView = () => {
  const steps = getExpSteps({ steps: AllSteps, level: "auto" });
  const initValues = {
    name: "abc",
  };

  return <GuidedSteps steps={steps} initValues={initValues} />;
};

export { SampleView };
