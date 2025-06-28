import { TabPage } from "../common/tab_page";

import { Wei } from "./Wei";
import { SampleView } from "./sample";
const Pages = {
  Wei,
  SampleView,
};

const Summary = {
  StepForm: [
    "与 ProForm 完全相同",
    "只是 onFinish 支持了 Promise，如果返回 false, 就不会跳转下一步。",
  ],
};
const IndexPage = () => {
  return <TabPage pages={Pages} title="Try Stepform" summary={Summary} />;
};

export default IndexPage;
