import { Breadcrumb } from "@fluentui/react";

import React from "react";
import { Codebox } from "../components/Codebox";
import { GroupedDeploymentList } from "../components/GroupedDeploymentList";
import { HandleClickAsLink } from "../utils/helpers/handleClick";

import { FluentProvider } from "@fluentui/react-components";
import { currentTheme } from "../index";
import {
  makeStyles,
  tokens,
  TabValue,
  SelectTabEvent,
  SelectTabData,
  Tab,
  TabList,
  Button,
} from "@fluentui/react-components";
import { CheckmarkRegular, CopyRegular } from "@fluentui/react-icons";
import {
  flatFilteredData,
  parameterFileGenerator,
} from "../utils/helpers/jsonHelper";

var useStyles = makeStyles({
  breadcrumb: {
    color: tokens.colorNeutralForeground1,
  },
});

export const Deployment = () => {
  const [buttonState, setButtonState] = React.useState(false);

  function copyIt() {
    navigator.clipboard.writeText(deployCodeBoxContent);
    setButtonState(true);
    setTimeout(() => setButtonState(false), 1000);
  }

  const styles = useStyles();

  const [selectedValue, setSelectedValue] =
    React.useState<TabValue>("conditions");

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  const ListView = React.memo(() => (
    <div role="tabpanel" aria-labelledby="List View">
      <GroupedDeploymentList />
    </div>
  ));

  const CodeBox = React.memo(() => (
    <div role="tabpanel" aria-labelledby="Code Box">
      <br />
      <br />
      <Button
        icon={buttonState ? <CheckmarkRegular /> : <CopyRegular />}
        onClick={copyIt}
        appearance="primary"
      >
        Copy
      </Button>
      <br />
      <br />
      <Codebox
        code={deployCodeBoxContent}
        language={"json"}
        showLineNumbers={true}
        startingLineNumber={1}
      />
    </div>
  ));

  return (
    <FluentProvider theme={currentTheme}>
      <div>
        <Breadcrumb
          items={[
            { text: "Start", key: "Start", onClick: HandleClickAsLink("/") },
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
              style: { color: tokens.colorNeutralForeground2BrandHover },
            },
          ]}
          ariaLabel="With last item rendered as heading"
          overflowAriaLabel="More links"
          className={styles.breadcrumb}
        />

        <div>
          <TabList
            selectedValue={selectedValue}
            onTabSelect={onTabSelect}
            defaultSelectedValue="listView"
          >
            <Tab id="ListView" value="listView">
              List View
            </Tab>
            <Tab id="CodeView" value="codeView">
              Code View
            </Tab>
          </TabList>
          <div>
            {selectedValue === "listView" && <ListView />}
            {selectedValue === "codeView" && <CodeBox />}
          </div>
        </div>
      </div>
    </FluentProvider>
  );
};

const deployCodeBoxContent = JSON.stringify(
  parameterFileGenerator(flatFilteredData),
  null,
  2
);
