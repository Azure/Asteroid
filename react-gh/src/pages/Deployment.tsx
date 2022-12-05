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
  SelectionMode,
} from "@fluentui/react";
import { Link as ReactLink } from "@fluentui/react";
import React from "react";
import { ExplanationButton } from "../components/buttons/ExplanationButton";
import { Codebox } from "../components/Codebox";
import { GroupedDeploymentList } from "../components/GroupedDeploymentList";
import { HandleClickAsLink } from "../utils/helpers/handleClick";
import { formaterDonnees } from "../utils/helpers/jsonGenerator";

export const Deployment = () => {
  const [copied, setCopied] = React.useState(false);
  const filename = "deploy.json";
  const error = false;
  const [lastHeader, setLastHeader] = React.useState<
    { props: IPivotItemProps } | undefined
  >(undefined);

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
    <div>
      <Breadcrumb
        items={[
          { text: "Start", key: "App", onClick: HandleClickAsLink("/") },
          {
            text: "Configuration",
            key: "Configuration",
            onClick: HandleClickAsLink("/Configuration"),
          },
          {
            text: "Deployment",
            key: "Deployment",
            isCurrentItem: true,
            as: "h4",
          },
        ]}
        ariaLabel="With last item rendered as heading"
        overflowAriaLabel="More links"
      />
      <h1>Deployment Page</h1>
      <Pivot
        aria-label="OnChange Pivot Example"
        linkSize="normal"
        linkFormat="tabs"
        onLinkClick={setLastHeader}
        style={{ marginTop: "25px" }}
      >
        <PivotItem headerText="List View"
          itemKey="listView"
          itemIcon="BulletedList">
          <Label styles={labelStyles}>Pivot #7</Label>
          <GroupedDeploymentList/>
        </PivotItem>
        <PivotItem
          headerText="Code View"
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
                  styles={{
                    dropdown: { width: 200 },
                  }}
                />
              </Stack>
            </Stack.Item>
          </Stack>
          <CommandBarButton
            disabled={error}
            className="action position-relative"
            iconProps={{ iconName: copied ? "Completed" : "Save" }}
            text={!error ? "Save" : ""}
            primaryActionButtonProps={{ download: filename }}
            onClick={downloadIt}
          />
          <CommandBarButton
            disabled={copied || error}
            className="action position-relative"
            iconProps={{ iconName: copied ? "Completed" : "Copy" }}
            text={!error ? "Copy" : ""}
            onClick={copyIt}
          />
          <Codebox
            code={deploycmd}
            language={"json"}
            showLineNumbers={true}
            startingLineNumber={1}
          />
          {/* <Separator styles={{ root: { marginTop: "30px !important" } }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <b style={{ marginRight: "10px" }}>
                Get started with your journey to Cloud!
              </b>
              <Image src="./Images\bicep.png" alt="Built with bicep" />{" "}
              <p style={{ marginLeft: "10px" }}>powered by Bicep</p>
            </div>
          </Separator> */}
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
    </div>
  );
};

const deploystr = formaterDonnees("data_path");
const deploycmd: string = JSON.stringify(deploystr, null, 2);

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

const options: IDropdownOption[] = [
  { key: "temp1", text: "1.0" },
  { key: "temp2", text: "1.1" },
  { key: "temp3", text: "1.2" },
];
const stackTokens: IStackTokens = { childrenGap: 40 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "auto",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};
