import * as React from "react";
import {
  Dropdown,
  Label,
  Pivot,
  PivotItem,
  Separator,
  Stack,
  Text,
  IDropdownOption,
  IDropdownStyles,
  ILabelStyles,
  IPivotItemProps,
  IStyleSet,
  IStackStyles,
  IStackTokens,
  Link,
  CommandBarButton,
  Breadcrumb,
  PrimaryButton,
} from "@fluentui/react";
import { Link as ReactLink } from "@fluentui/react";
import { AzureThemeLight, AzureThemeDark } from "@fluentui/azure-themes";

// Local Imports
import { Codebox } from "../components/Codebox";
import { QChoice } from "../components/q_checkbox";
import { IQChoice } from "../components/QIcheckbox";

// Import: Parameters Metadata
import { HandleClickAsLink } from "../utils/helpers/handleClick";
import { formaterDonnees } from "../utils/helpers/jsonGenerator";
import { ExplanationButton } from "../components/buttons/ExplanationButton";

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
        <PivotItem headerText="Networking">
          <Stack tokens={{ childrenGap: 15 }} styles={adv_stackstyle}>
            <Label style={{ marginBottom: "10px" }}>
              Platform management, security, and governance
            </Label>
            <Stack
              tokens={{ childrenGap: 15 }}
              style={{ marginTop: 0, marginLeft: "50px" }}
            >
              <Stack horizontal tokens={{ childrenGap: 55 }}>
                <Stack.Item>
                  <Label>
                    Do you want to enable logging?{" "}
                    <Link
                      target="_"
                      href="https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-workspace-overview"
                    >
                      docs
                    </Link>
                  </Label>
                  <QChoice text1="text1" text2="text2" />
                </Stack.Item>
              </Stack>

              <Stack horizontal tokens={{ childrenGap: 55 }}>
                <Stack.Item>
                  <Label>
                    Do you want to enable logging?{" "}
                    <Link
                      target="_"
                      href="https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-workspace-overview"
                    >
                      docs
                    </Link>
                  </Label>
                  <QChoice text1="yes" text2="no" />
                </Stack.Item>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 55 }}>
                <Stack.Item>
                  <Label>Virtual Machine Type</Label>
                  <IQChoice text1="text1" text2="text2" text3="text3" />
                </Stack.Item>
              </Stack>
              <Stack.Item align="start">
                <Label required={true}>
                  Log Support - Landing Zone with multiple availability zones
                  configured across a cluster provide a higher level of
                  availability to protect against a hardware failure or a
                  planned maintenance event. See{" "}
                  <Link
                    target="_"
                    href="https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-workspace-overview"
                  >
                    limits{" "}
                  </Link>{" "}
                  before selecting
                </Label>
                <Stack.Item>
                  <QChoice text1="text1" text2="text2" />
                </Stack.Item>
              </Stack.Item>
            </Stack>
            {/* <Separator styles={{ root: { marginTop: "30px !important" } }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <b style={{ marginRight: "10px" }}>Deploy Landing Zone</b>
                <Image src="./media/logo.svg" alt="Built with bicep" />{" "}
                <p style={{ marginLeft: "10px" }}>powered by Asteroid</p>
              </div>
            </Separator> */}
          </Stack>
        </PivotItem>
        <PivotItem headerText="Security">
          <Label styles={labelStyles}>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText="Storage">
          <Label styles={labelStyles}>Pivot #3</Label>
        </PivotItem>
        <PivotItem headerText="Compute">
          <Label styles={labelStyles}>Pivot #4</Label>
        </PivotItem>
        <PivotItem headerText="Identity">
          <Label styles={labelStyles}>Pivot #5</Label>
        </PivotItem>
        <PivotItem headerText="Databases">
          <Label styles={labelStyles}>Pivot #6</Label>
        </PivotItem>
        <PivotItem headerText="Monitoring">
          <Label styles={labelStyles}>Pivot #7</Label>
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
