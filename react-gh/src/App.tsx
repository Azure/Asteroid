// React Imports
import React from 'react';
import { FontWeights, PrimaryButton, ProgressIndicator, Stack, Text, ThemeProvider, Toggle, IIconProps, IStackStyles, IStackTokens, ITextStyles, initializeIcons, getTheme } from '@fluentui/react';
import { AzureThemeLight, AzureThemeDark } from '@fluentui/azure-themes';
import { FontSizes } from '@fluentui/theme';
import { mergeStyles, mergeStyleSets } from '@fluentui/merge-styles';
import { Link as ReactLink } from '@fluentui/react';
import { ImageFit } from '@fluentui/react/lib/Image';
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
  IDocumentCardStyles,
} from '@fluentui/react/lib/DocumentCard';
import { Link } from "react-router-dom";

// Local Imports
import './App.css';
import ReactDOM from 'react-dom';
import business_building from './media/smb.png';
import enterprise_building from './media/enterprise.png'
import government_building from './media/government.png';
import cloud_icon from './media/icons-cloud.svg';
import hybrid_cloud_icon from './media/icons-hybrid-cloud.svg';

initializeIcons();

// App
export const App: React.FunctionComponent = () => {

  const stackTokens: IStackTokens = { childrenGap: 40 };
  // Selects the theme dependent on the preferred color scheme of user: Light or Dark
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const { semanticColors, palette } = dark ? AzureThemeDark : AzureThemeLight

  return (
    <ThemeProvider applyTo='body' theme={{ semanticColors, palette }}>
      <main id="main" className="wrapper">
      <TitleBar/>
      <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
        <Text variant="xxLarge" styles={boldStyle}>
          Asteroid
        </Text>
        <Text variant="large">Get started with your journey to cloud!</Text>
        <Text variant="large" styles={boldStyle}>
          How would you decribe your organization?
        </Text>
        <div>
          
          <DocumentCard
            styles={cardStyles}
          >
            <div>
              <Link style={{textDecoration: 'none'}} to="./Page1"><Text>Small Medium-Sized Business</Text></Link>
            </div>
            <DocumentCardImage height={150} imageFit={ImageFit.contain} imageSrc={cloud_icon} />
            <DocumentCardDetails>
              <DocumentCardTitle title=" " shouldTruncate />
            </DocumentCardDetails>
          </DocumentCard>
          <DocumentCard
            styles={cardStyles}
            onClickHref=""
          >
            <div>
              <Link style={{textDecoration: 'none'}} to="./Page1"><Text>Enterprise</Text></Link>
            </div>
            <DocumentCardImage height={150} imageFit={ImageFit.contain} imageSrc={hybrid_cloud_icon} />
            <DocumentCardDetails>
              <DocumentCardTitle title=" " shouldTruncate />
            </DocumentCardDetails>
          </DocumentCard>
          <DocumentCard
            styles={cardStyles}
            onClickHref=""
          >
            <div>
              <Link style={{textDecoration: 'none'}} to="./Page1"><Text>Azure Government</Text></Link>
            </div>
            <DocumentCardImage height={150} imageFit={ImageFit.contain} imageSrc={government_building} />
            <DocumentCardDetails>
              <DocumentCardTitle title=" " shouldTruncate />
            </DocumentCardDetails>
          </DocumentCard>
        </div>
        
        <Stack horizontal tokens={stackTokens}>
        <Link to="explanationPage">
          <ExplanationButton/>
        </Link>
        </Stack>
        <ProgressBar/>

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

// Components & Styles
const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '1300px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

const cardStyles: IDocumentCardStyles = {
  root: { display: 'inline-block', marginRight: 20, marginBottom: 20, width: 320 },
};

// Title Bar
function TitleBar() {
  
  const titleClass = mergeStyleSets({ "display": "inline-block", "marginLeft": "10px", "verticalAlign": "top" })

  return (
    <nav role="menubar">
      <div style={{ width: "100%" }}>
        <div style={{ display: "inline-block", padding: "11px 12px 0px", fontSize: FontSizes.size28 }}>
          Asteroid Tool
        </div>
        <ToggleButton/>
      </div>
    </nav>
  )
}

// Large progress Bar Class
function ProgressBar() {

  const percentComplete = 0.2;

  const progressContainerClass = mergeStyles({
    height: 10,
    width: 300,
    background: '#eaeaea',
    borderRadius: 2,
    margin: '0 auto',
  });

  const progressBarClass = mergeStyles({
    height: 10,
    width: `${percentComplete * 100}%`,
    background: '#0078d4',
    borderRadius: 2,
    textAlign: 'center',
    transition: 'width 0.1s ease-in',
  });

  return (
    <div className={progressContainerClass}>
      <div className={progressBarClass}></div>
    </div>
  );

  // return (
  //   <ProgressIndicator barHeight={10} description="Your Progress" percentComplete={percentComplete} />
  // );
};

// Buttons
function _alertClicked(): void {
  alert('This feature is not yet implemented.');
}

// Toggle Button at left side of Title Bar
function ToggleButton() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div style={{ display: "inline-flex", float: "right", padding: "11px 12px 0px" }}>
      <Toggle
        defaultChecked={checked}
        onChange={_alertClicked}
        onText="Expert Mode"
        offText="User Mode"
      />
    </div>
  );
}

// Tracks the change of Toggle Button
function _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
  console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
}

// Explanation Button with Question Icon
function ExplanationButton() {

  const addFriendIcon: IIconProps = {
    iconName: 'Unknown',
    styles: {
      root: { color: 'white' }
    }
  };

  return (
    <PrimaryButton
      iconProps={addFriendIcon}
      text='Explanation'
    />
  );
}

