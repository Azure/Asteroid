// React Imports
import React from "react";
import { Stack, IStackTokens, Breadcrumb } from "@fluentui/react";
import { Divider, Text, tokens } from "@fluentui/react-components";

// Local Imports
import "./App.css";
import { ExplanationButton } from "../components/buttons/ExplanationButton";
import TemplateSelection from "../components/TemplateSelection";
import { Chat } from "../components/Chat";

// App
const App: React.FunctionComponent = () => {
  const stackTokens: IStackTokens = { childrenGap: 50 };

  return (
    <main id="main" className="wrapper">
      <Stack
        horizontal
        horizontalAlign="space-between"
        verticalAlign="center"
        styles={{ root: { width: "100%" } }}
      >
        <Stack.Item align="center">
          <Breadcrumb
            items={[
              {
                text: "Start",
                key: "Start",
                isCurrentItem: true,
                as: "h1",
                style: {
                  color: "white",
                },
              },
            ]}
            ariaLabel="With last item rendered as heading"
            overflowAriaLabel="More links"
          />
        </Stack.Item>
        <Stack.Item>
          <Chat />
        </Stack.Item>
      </Stack>

      <div
        style={{
          alignSelf: "center",
          margin: "0",
          minHeight: "10vh",
        }}
      />
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        tokens={stackTokens}
      >
        <Text size={500}>Get started with your journey to cloud!</Text>
        <Text size={500} weight="bold">
          How would you decribe your organization?
        </Text>
        <TemplateSelection />
        <Divider appearance="strong"></Divider>
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

export default App;
