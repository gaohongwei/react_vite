import { BasicForm } from "./basic";
import { LoginForm } from "./login";
import { FormLayout } from "./form_layout";
import { FormRef } from "./FormRef";
import { FormDependency } from "./formDependency";
import { FormWei } from "./formWei";
import { TabPage } from "../common/tab_page";
import { Summary } from "./allSummary";
import { RadioView, CheckboxView } from "./selectView";
const Pages = {
  BasicForm,
  LoginForm,
  FormWei,
  FormLayout,
  FormRef,
  FormDependency,
  RadioView,
  CheckboxView,
};

const IndexPage = () => {
  return <TabPage pages={Pages} title="Try Proform" summary={Summary} />;
};

export default IndexPage;
