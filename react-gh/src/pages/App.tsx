// React Imports
import React from "react";
import {
  FontWeights,
  Stack,
  Text,
  IStackStyles,
  IStackTokens,
  ITextStyles,
  initializeIcons,
  Separator,
  Breadcrumb,
} from "@fluentui/react";

// Local Imports
import "./App.css";
import government_building from "../media/government.svg";
import cloud_icon from "../media/icons-cloud.svg";
import hybrid_cloud_icon from "../media/icons-hybrid-cloud.svg";
import { ExplanationButton } from "../components/buttons/ExplanationButton";
import { ProgressBar } from "../components/ProgressBar";
import { Card } from "../components/Card";

initializeIcons();

// App
export const App: React.FunctionComponent = () => {
  const stackTokens: IStackTokens = { childrenGap: 40 };
  return (
    <main id="main" className="wrapper">
      <Breadcrumb
        items={[{ text: "Start", key: "Start", isCurrentItem: true, as: "h1"}]}
        
        ariaLabel="With last item rendered as heading"
        overflowAriaLabel="More links"
      />
      <div
        style={{
          alignSelf: "center",
          margin: "0 auto",
          minHeight: "10vh",
        }}
      />
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        styles={stackStyles}
        tokens={stackTokens}
      >
        <Text variant="large">Get started with your journey to cloud!</Text>
        <Text variant="large" styles={boldStyle}>
          How would you decribe your organization?
        </Text>
        <div>
          <Card
            linkTo="./Configuration"
            title="Public Cloud"
            imageSrc={cloud_icon}
          />
          <Card
            linkTo="./Configuration"
            title="Hybrid Cloud"
            imageSrc={hybrid_cloud_icon}
          />
          <Card
            linkTo="./Configuration"
            title="Azure Government"
            imageSrc={government_building}
          />
        </div>
        {/* <ProgressBar /> */}
        <Separator />
        <ExplanationButton
          explanationText="Hi & welcome to Asteroid! Please watch the Video to get an understanding of the Asteroid Tool. Public cloud is a cloud computing model in which the cloud infrastructure is owned and operated by a third-party cloud service provider and made available to the general public over the Internet. Public cloud services are typically provided on a pay-as-you-go basis, and the cloud provider is responsible for maintaining the infrastructure, including hardware, software, networking, and data centers."
          explanationVideo="https://microsofteur-my.sharepoint.com/personal/t-orkanc_microsoft_com/_layouts/15/embed.aspx?UniqueId=b6a73f04-8aa6-4745-ac5e-6693990d1b70&embed=%7B%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
          headerText="Asteroid Explanation"
          videoTitle="Asteroid Explanation Video"
        />
      </Stack>
    </main>
  );
};

// Styles & constants
const boldStyle: Partial<ITextStyles> = {
  root: { fontWeight: FontWeights.semibold },
};
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "auto",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};
