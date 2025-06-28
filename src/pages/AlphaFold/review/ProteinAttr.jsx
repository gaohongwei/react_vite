import { ComForm, FormLabels, FormItem } from "ComView/Form";
import { i18f } from "ComView/i18nHelper";
const showConfig = {
  name: {},
  spiece: {},
  function: {},
  location: {},
  pathology: {},
  ptm: {},
};

const ProteinAttr = ({ row }) => {
  if (!row || Object.keys(row).length < 1) return null;

  const { harm, effect } = row;
  const showMessage = !harm && !effect;
  return (
    <ComForm showButton={false}>
      {FormLabels({ obj: row, showConfig })}
      <FormItem visible={showMessage} name="hint">
        {i18f("column.hintMessgae")}
      </FormItem>
    </ComForm>
  );
};

export { ProteinAttr };
