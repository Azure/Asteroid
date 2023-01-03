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
  parameterFileGenerator,
  getStorage,
} from "../utils/helpers/jsonHelper";
import { Alert } from "@fluentui/react-components/unstable";

var useStyles = makeStyles({
  breadcrumb: {
    color: tokens.colorNeutralForeground1,
  },
});

const Deployment = () => {
  const [buttonState, setButtonState] = React.useState(false);
  var [jsonData, setData] = React.useState<any>(getStorage());

  var deployCodeBoxContent: string = JSON.stringify(
    parameterFileGenerator(),
    null,
    2
  );

  function copyIt() {
    navigator.clipboard.writeText(deployCodeBoxContent);
    setButtonState(true);
    setTimeout(() => setButtonState(false), 1000);
  }

  const styles = useStyles();

  const [selectedValue, setSelectedValue] =
    React.useState<TabValue>("ListView");

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
    setData(getStorage());
    deployCodeBoxContent = JSON.stringify(parameterFileGenerator(), null, 2);
  };

  const ListView = React.memo(() => (
    <div role="tabpanel" aria-labelledby="List View">
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <br />
        <Alert intent="info">
          This view shows you all the parameters you can edit trough the
          configuration questionnaire.
        </Alert>
      </div>
      <GroupedDeploymentList />
    </div>
  ));

  const CodeBox = React.memo(() => (
    <div role="tabpanel" aria-labelledby="Code Box">
      <br />
      <div>
        <Alert intent="info">
          This view shows you all the parameters from the List View and
          additional parameters that are needed for a later ARM template
          deployment.
        </Alert>
      </div>
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
            {
              text: "Start",
              key: "Start",
              onChange: HandleClickAsLink("/", false),
            },
            {
              text: "Configuration",
              key: "Configuration",
              onClick: HandleClickAsLink("/Configuration", false),
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
            defaultSelectedValue="ListView"
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

export default Deployment;
