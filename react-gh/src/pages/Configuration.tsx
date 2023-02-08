import * as React from "react";

import { Stack, Breadcrumb } from "@fluentui/react";
import {
  Button,
  TabList,
  Tab,
  TabValue,
  SelectTabData,
  SelectTabEvent,
  webDarkTheme,
  webLightTheme,
  FluentProvider,
  Divider,
  tokens,
  Avatar,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogActions,
  DialogSurface,
  DialogTitle,
  DialogBody,
  Label,
  Input,
  useId,
  Text,
  Subtitle2,
} from "@fluentui/react-components";

// Local Imports
import { HandleClickAsLink } from "../utils/helpers/handleClick";
import { CategoryQuestions } from "../utils/helpers/questionsBoard";
import { state } from "../components/TemplateSelection";
import { SendRegular } from "@fluentui/react-icons";

// Import: Parameters Metadata

const Configuration = () => {
  // Selects the theme dependent on the preferred color scheme of user: Light or Dark
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = dark ? webDarkTheme : webLightTheme;

  const [selectedValue, setSelectedValue] =
    React.useState<TabValue>("conditions");

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  const AzureCoreSetup = React.memo(() => (
    <div role="tabpanel" aria-labelledby="Azure Core Setup">
      {CategoryQuestions(
        "Azure Core Setup",
        "Azure Core Setup",
        "Azure Core Setup"
      )}
    </div>
  ));

  const PlatformManagementSecurityandGovernance = React.memo(() => (
    <div
      role="tabpanel"
      aria-labelledby="Platform Management Security and Governance"
    >
      {CategoryQuestions(
        "Platform management, security, and governance",
        "Platform management, security, and governance",
        "Platform management, security, and governance"
      )}
    </div>
  ));

  const PlatformDevOpsAutomation = React.memo(() => (
    <div role="tabpanel" aria-labelledby="Platform Devops and Automation">
      {CategoryQuestions(
        "Platform DevOps and automation",
        "Platform DevOps and automation",
        "Platform DevOps and automation"
      )}
    </div>
  ));

  const Identity = React.memo(() => (
    <div role="tabpanel" aria-labelledby="Identity">
      {CategoryQuestions("Identity", "Identity", "Identity")}
    </div>
  ));

  const NetworkTopologyConnectivity = React.memo(() => (
    <div role="tabpanel" aria-labelledby="Network Topology and Connectivity">
      {templateSelecter(state.endHubAndSpoke, state.endVWAN)}
    </div>
  ));

  const LandingZoneConfiguration = React.memo(() => (
    <div role="tabpanel" aria-labelledby="Landing Zone Configuration">
      {CategoryQuestions(
        "Landing zones configuration",
        "Landing zones configuration",
        "Landing zones configuration"
      )}
    </div>
  ));

  const underlineId = useId("input-underline");

  return (
    <FluentProvider theme={currentTheme}>
      <Stack
        horizontal
        horizontalAlign="space-between"
        verticalAlign="center"
        styles={{ root: { width: "100%", marginBottom: "20px" } }}
      >
        <Stack.Item align="center">
          <Breadcrumb
            items={[
              {
                text: "Start",
                key: "App",
                onClick: HandleClickAsLink("/", false),
              },
              {
                text: "Configuration",
                key: "Configuration",
                isCurrentItem: true,
                as: "h4",
                style: { color: tokens.colorNeutralForeground2BrandHover },
              },
            ]}
            ariaLabel="With last item rendered as heading"
            overflowAriaLabel="More links"
          />
        </Stack.Item>
        <Stack.Item align="center">
          <Dialog>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="transparent">
                <Avatar
                  image={{
                    src: "https://i.pinimg.com/originals/9c/da/64/9cda6405c91f0a6060592638e58932c4.gif",
                  }}
                  badge={{
                    status: "available",
                  }}
                  size={96}
                />
              </Button>
            </DialogTrigger>
            <DialogSurface>
              <DialogBody>
                <DialogTitle>Speak to CS·AI</DialogTitle>
                <DialogContent>
                  <div>
                    <Subtitle2>Chat</Subtitle2>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Text align="center" size={200}>
                      {new Date().toLocaleTimeString()}
                    </Text>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Text>
                      This is an example of the most recent ChatGPT Question.{" "}
                    </Text>
                  </div>
                  <br />
                  <div style={{ textAlign: "left" }}>
                    <Text font="monospace">
                      This is an example of the most recent ChatGPT Reply.
                    </Text>
                  </div>
                  <br />
                  <div style={{ width: "100%" }}>
                    <Input
                      appearance="underline"
                      contentAfter={
                        <Button
                          appearance="transparent"
                          icon={<SendRegular />}
                        />
                      }
                      id={underlineId}
                      style={{ width: "100%" }}
                    />
                  </div>
                </DialogContent>
                <DialogActions>
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">Close</Button>
                  </DialogTrigger>
                </DialogActions>
              </DialogBody>
            </DialogSurface>
          </Dialog>
        </Stack.Item>

        <Stack.Item align="center">
          <Button
            onClick={HandleClickAsLink("../Deployment", false)}
            style={{ marginTop: "20px" }}
          >
            Deploy!
          </Button>
        </Stack.Item>
      </Stack>
      <div>
        <TabList
          selectedValue={selectedValue}
          onTabSelect={onTabSelect}
          defaultSelectedValue="AzureCoreSetup"
        >
          <Tab id="AzureCoreSetup" value="AzureCoreSetup">
            {" "}
            Azure Core Setup{" "}
          </Tab>
          <Tab
            id="PlatformManagementSecurityandGovernance"
            value="PlatformManagementSecurityandGovernance"
          >
            {" "}
            Platform Management, Security, and Governance{" "}
          </Tab>
          <Tab id="PlatformDevOpsAutomation" value="PlatformDevOpsAutomation">
            {" "}
            Platform DevOps & Automation{" "}
          </Tab>
          <Tab id="Identity" value="Identity">
            {" "}
            Identity{" "}
          </Tab>
          {state.stepHybrid === true && (
            <Tab
              id="NetworkTopologyConnectivity"
              value="NetworkTopologyConnectivity"
            >
              Network Topology & Connectivity
            </Tab>
          )}

          <Tab id="LandingZoneConfiguration" value="LandingZoneConfiguration">
            {" "}
            Landing Zone Configuration{" "}
          </Tab>
        </TabList>
        <div>
          {selectedValue === "AzureCoreSetup" && <AzureCoreSetup />}
          {selectedValue === "PlatformManagementSecurityandGovernance" && (
            <PlatformManagementSecurityandGovernance />
          )}
          {selectedValue === "PlatformDevOpsAutomation" && (
            <PlatformDevOpsAutomation />
          )}
          {selectedValue === "Identity" && <Identity />}
          {selectedValue === "NetworkTopologyConnectivity" && (
            <NetworkTopologyConnectivity />
          )}
          {selectedValue === "LandingZoneConfiguration" && (
            <LandingZoneConfiguration />
          )}
        </div>
      </div>

      <div>
        <Divider appearance="strong"></Divider>
      </div>
    </FluentProvider>
  );
};
export default Configuration;

function templateSelecter(HubAndSpoke: boolean, VWAN: boolean) {
  if (HubAndSpoke) {
    if (HubAndSpoke === true) {
      return CategoryQuestions(
        "Hub and Spoke",
        "Hub and Spoke",
        "Hub and Spoke"
      );
    }
  } else if (VWAN) {
    return CategoryQuestions(
      "Hub and Spoke",
      "Virtual WAN (Microsoft managed)",
      "Virtual WAN (Microsoft managed)"
    );
  }
}
