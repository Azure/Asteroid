// React Imports
import React from 'react';
import { FontWeights, Stack, Text, ThemeProvider, IStackStyles, IStackTokens, ITextStyles, initializeIcons } from '@fluentui/react';
import { AzureThemeLight, AzureThemeDark } from '@fluentui/azure-themes';
import { Link as ReactLink } from '@fluentui/react';
import { Link } from "react-router-dom";

// Local Imports
import './App.css';
import government_building from './media/government.svg';
import cloud_icon from './media/icons-cloud.svg';
import hybrid_cloud_icon from './media/icons-hybrid-cloud.svg';
import { TitleBar } from './components/TitleBar';
import { ExplanationButton } from './components/buttons/ExplanationButton';
import { ProgressBar } from './components/ProgressBar';
import { Card } from './components/Card';

initializeIcons();

// App
export const App: React.FunctionComponent = () => {

  const stackTokens: IStackTokens = { childrenGap: 40 };
  // Selects the theme dependent on the preferred color scheme of user: Light or Dark
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const { semanticColors, palette } = dark ? AzureThemeDark : AzureThemeLight;

  return (
    <ThemeProvider applyTo='body' theme={{ semanticColors, palette }}>
      <main id="main" className="wrapper">
        <TitleBar />
        <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
          <Text variant="large">Get started with your journey to cloud!</Text>
          <Text variant="large" styles={boldStyle}>
            How would you decribe your organization?
          </Text>
          <div>
            <Card linkTo="/./Page1" title="Public Cloud" imageSrc={cloud_icon} />
            <Card linkTo="/./Page1" title="Hybrid Cloud" imageSrc={hybrid_cloud_icon} />
            <Card linkTo="/./Page1" title="Azure Government" imageSrc={government_building} />
          </div>

          <Stack horizontal tokens={stackTokens}>
            <ExplanationButton 
            explanationText='Hi & welcome to Asteroid! Please watch the Video to get an understanding of the Asteroid Tool. Public cloud is a cloud computing model in which the cloud infrastructure is owned and operated by a third-party cloud service provider and made available to the general public over the Internet. Public cloud services are typically provided on a pay-as-you-go basis, and the cloud provider is responsible for maintaining the infrastructure, including hardware, software, networking, and data centers.' 
            explanationVideo='https://microsofteur-my.sharepoint.com/personal/t-orkanc_microsoft_com/_layouts/15/embed.aspx?UniqueId=b6a73f04-8aa6-4745-ac5e-6693990d1b70&embed=%7B%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create'
            headerText='Asteroid Explanation' videoTitle='Asteroid Explanation Video'/>

          </Stack>
          <ProgressBar />

          <Text variant="large" styles={boldStyle}>
            Essential links
          </Text>
          <Stack horizontal tokens={stackTokens} horizontalAlign="center">
            <ReactLink href="https://github.com/Azure/Asteroid">Project Github</ReactLink>
            <ReactLink href="https://github.com/Azure/Enterprise-Scale">Azure Enterpise-Scale Reference</ReactLink>
            <ReactLink href="https://developer.microsoft.com/en-us/fluentui#/controls/web">Fluent UI Components</ReactLink>
          </Stack>
        </Stack>
      </main>
    </ThemeProvider>
  );
};

// Styles & constants
const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '1300px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};
