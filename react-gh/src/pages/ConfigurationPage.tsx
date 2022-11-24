import * as React from "react";
import {
  Dropdown,
  Image,
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
  ThemeProvider,
  IStackStyles,
  IStackTokens,
} from "@fluentui/react";
import { Link as ReactLink } from "@fluentui/react";
import { AzureThemeLight, AzureThemeDark } from "@fluentui/azure-themes";
import { TitleBar } from "../components/TitleBar";
import { Footer } from "../components/Footer";
import { ExplanationButton } from "../components/buttons/ExplanationButton";
import { ProgressBar } from "../components/ProgressBar";
import { Codebox } from "../components/Codebox";

const deploycmd =
  `// test code comment\n` +
  `PlaceholderPlaceholderPlaceholder\n` +
  `PlaceholderPlaceholderPlaceholder\n` +
  `PlaceholderPlaceholderPlaceholder\n` +
  `PlaceholderPlaceholderPlaceholder\n` +
  "";

const ConfigurationPage = () => {
  const stackTokens: IStackTokens = { childrenGap: 40 };
  const [lastHeader, setLastHeader] = React.useState<
    { props: IPivotItemProps } | undefined
  >(undefined);
  // Selects the theme dependent on the preferred color scheme of user: Light or Dark
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const { semanticColors, palette } = dark ? AzureThemeDark : AzureThemeLight;

  return (
    <ThemeProvider applyTo="body" theme={{ semanticColors, palette }}>
      <main id="main" className="wrapper">
        
        <TitleBar />
        <Label>Design Area: {lastHeader?.props.headerText}</Label>
        <Pivot
          aria-label="OnChange Pivot Example"
          linkSize="large"
          linkFormat="tabs"
          onLinkClick={setLastHeader}
        >
          <PivotItem headerText="Networking">
            <Label styles={labelStyles}>Pivot #1</Label>
            <Separator styles={{ root: { marginTop: "30px !important" } }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <b style={{ marginRight: "10px" }}>Deploy Cluster</b>
                <Image src="./bicep.png" alt="Built with bicep" />{" "}
                <p style={{ marginLeft: "10px" }}>powered by Bicep</p>
              </div>
            </Separator>
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
          <PivotItem
            headerText="Command Line"
            itemKey="deployArmCli"
            itemIcon="PasteAsCode"
          >
            <Stack
              horizontal
              horizontalAlign="space-between"
              styles={{ root: { width: "100%", marginBottom: "20px" } }}
            >
              <Stack.Item>
                <Label>
                  Commands to deploy your fully operational environment
                </Label>
                <Text>
                  Requires{" "}
                  <ReactLink
                    href="https://docs.microsoft.com/cli/azure/install-azure-cli"
                    underline
                  >
                    {" "}
                    AZ CLI (2.37.0 or greater){" "}
                  </ReactLink>
                  , or execute in the{" "}
                  <ReactLink href="http://shell.azure.com/" underline>
                    {" "}
                    Azure Cloud Shell{" "}
                  </ReactLink>
                  .
                </Text>
              </Stack.Item>
              <Stack.Item align="end">
                <Stack>
                  <Dropdown
                    // errorMessage={getError(invalidArray, 'selectedTemplate')}
                    label="Template Version"
                    selectedKey={"temp1"}
                    // onChange={(ev, { key }) => updateFn('selectedTemplate', key)}
                    options={options}
                    styles={dropdownStyles}
                  />
                </Stack>
              </Stack.Item>
            </Stack>
            <Codebox code={deploycmd} language={"json"} showLineNumbers={true} startingLineNumber={1} dark={dark}/>
            <Separator styles={{ root: { marginTop: "30px !important" } }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <b style={{ marginRight: "10px" }}>
                  Get started with your journey to Cloud!
                </b>
                <Image src="./Images\bicep.png" alt="Built with bicep" />{" "}
                <p style={{ marginLeft: "10px" }}>powered by Bicep</p>
              </div>
            </Separator>
          </PivotItem>
        </Pivot>
        <Separator />
        <Stack
          horizontalAlign="center"
          verticalAlign="center"
          verticalFill
          styles={stackStyles}
          tokens={stackTokens}
        >
          <ProgressBar />
          <Separator/>
          <ExplanationButton headerText={""} explanationText={""} videoTitle={""} explanationVideo={""} />
        </Stack>
      </main>
      <Footer/>
    </ThemeProvider>
  );
};
export default ConfigurationPage;

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
    width: "1300px",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};
