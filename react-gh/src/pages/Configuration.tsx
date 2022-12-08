import * as React from "react";
import {
  Pivot,
  PivotItem,
  Separator,
  Stack,
  IDropdownOption,
  IDropdownStyles,
  ILabelStyles,
  IPivotItemProps,
  IStyleSet,
  IStackStyles,
  IStackTokens,
  Breadcrumb,
  PrimaryButton,
} from "@fluentui/react";
import { AzureThemeLight, AzureThemeDark } from "@fluentui/azure-themes";

// Local Imports
import { HandleClickAsLink } from "../utils/helpers/handleClick";
import { formaterDonnees } from "../utils/helpers/jsonGenerator";
import { ExplanationButton } from "../components/buttons/ExplanationButton";
import { categoryQuestions } from "../utils/helpers/questionsBoard";

// Import: Parameters Metadata
const deploystr = formaterDonnees("data_path");
const deploycmd: string = JSON.stringify(deploystr, null, 2);

export const adv_stackstyle = {
  root: { border: "1px solid", margin: "10px 0", padding: "15px" },
};

const Configuration = () => {
  const stackTokens: IStackTokens = { childrenGap: 40 };
  const [lastHeader, setLastHeader] = React.useState<
    { props: IPivotItemProps } | undefined
  >(undefined);
  // Selects the theme dependent on the preferred color scheme of user: Light or Dark
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const { semanticColors, palette } = dark ? AzureThemeDark : AzureThemeLight;

  const [copied, setCopied] = React.useState(false);
  const filename = "deploy.json";
  const error = false;

  function copyIt() {
    navigator.clipboard.writeText(deploycmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }
  function downloadIt() {
    function dataUrl(data: undefined) {
      return "data:x-application/text," + escape(deploycmd);
    }
    // window.open(dataUrl());
  }

  return (
    <main id="main" className="wrapper">
      <Stack
        horizontal
        horizontalAlign="space-between"
        verticalAlign="center"
        styles={{ root: { width: "100%", marginBottom: "20px" } }}
      >
        <Stack.Item align="center">
          <Breadcrumb
            items={[
              { text: "Start", key: "App", onClick: HandleClickAsLink("/") },
              {
                text: "Configuration",
                key: "Configuration",
                isCurrentItem: true,
                as: "h4",
              },
            ]}
            ariaLabel="With last item rendered as heading"
            overflowAriaLabel="More links"
          />
        </Stack.Item>
        <Stack.Item align="center">
            <PrimaryButton
              text="Deploy!"
              onClick={HandleClickAsLink("../Deployment")}
              allowDisabledFocus
            />
        </Stack.Item>
      </Stack>

      <Pivot
        aria-label="OnChange Pivot Example"
        linkSize="normal"
        linkFormat="tabs"
        onLinkClick={setLastHeader}
        style={{ marginTop: "25px" }}
      >
        <PivotItem headerText="Network Topology & Connectivity">
          {categoryQuestions("Network topology and connectivity")}
        </PivotItem>
        <PivotItem headerText="Landing Zone Configuration">
        {categoryQuestions("Landing zones configuration")}
        </PivotItem>
        {/* <PivotItem headerText="Compute">
          <Label styles={labelStyles}>Compute Pivot #4</Label>
        </PivotItem> */}
        <PivotItem headerText="Identity">
          {categoryQuestions("Identity")}
        </PivotItem>
        <PivotItem headerText="Platform DevOps & Automation">
        {categoryQuestions("Platform DevOps and automation")}
        </PivotItem>
        <PivotItem headerText="Platform Management, Security, and Governance">
          {categoryQuestions("Platform management, security, and governance")}
        </PivotItem>
        <PivotItem headerText="No Hybrid Connectivity">
          {categoryQuestions("No Hybrid Connectivity")}
        </PivotItem>
      </Pivot>
      {/* <Separator /> */}
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        styles={stackStyles}
        tokens={stackTokens}
      >
        {/* <ProgressBar /> */}
        <Separator />
        <ExplanationButton
          headerText={""}
          explanationText={""}
          videoTitle={""}
          explanationVideo={""}
        />
      </Stack>
    </main>
  );
};
export default Configuration;

// Components
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 200 },
};

const options: IDropdownOption[] = [
  { key: "temp1", text: "1.0" },
  { key: "temp2", text: "1.1" },
  { key: "temp3", text: "1.2" },
];

// Styles & constants
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "auto",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};
