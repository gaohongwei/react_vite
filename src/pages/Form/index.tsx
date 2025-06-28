import { TabPage } from "../common/tab_page";
import { Summary } from "./allSummary";

import { Basic } from "./Basic";
import { FormLayout } from "./FormLayout";

const Pages = { Basic, FormLayout };

const IndexPage = () => {
  return <TabPage pages={Pages} summary={Summary} title="Try Form" />;
};

export default IndexPage;
