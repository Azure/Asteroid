import { Link } from "react-router-dom";
import * as React from 'react';
import { Dropdown, FontWeights, Image, Label, Pivot, PivotItem, PrimaryButton, Separator, Stack, Text, TextField, ThemeProvider, Toggle, IIconProps, IDropdownOption, IDropdownStyles, ILabelStyles, IStackStyles, IStyleSet, ITextStyles, IStackTokens} from '@fluentui/react';
import { Link as ReactLink } from '@fluentui/react';
import { AzureThemeLight, AzureThemeDark } from '@fluentui/azure-themes';
import { mergeStyles, mergeStyleSets } from '@fluentui/merge-styles';

import { useId, useBoolean } from '@fluentui/react-hooks';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

const deploycmd =
`PlaceholderPlaceholderPlaceholder\n` +
`PlaceholderPlaceholderPlaceholder\n` +
`PlaceholderPlaceholderPlaceholder\n` +
`PlaceholderPlaceholderPlaceholder\n` + ""

const Explanation = () => {

  // Selects the theme dependent on the preferred color scheme of user: Light or Dark
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;  
  const { semanticColors, palette } = dark ? AzureThemeDark : AzureThemeLight

  return (
  <ThemeProvider theme={{ semanticColors, palette }}>
  <main id="main" className="wrapper">
  <TitleBar/>
  <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
    <Text variant="xxLarge" styles={boldStyle}>
      Asteroid
    </Text>
    <Text variant="large">Get started with your journey to cloud!</Text>
    <div style={{ position:"relative", display: "inline-block", float:"left", left:0, padding: "11px 12px 20px" }}>
    </div>
    <Stack horizontal tokens={stackTokens}>
    <ExplanationArea/>
    <ExplanationArea/>
    </Stack>
    <Link to="/">
      <ReturnButton/>
    </Link>

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
 }
 export default Explanation;

 // Components
 const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 200 },
};

const options: IDropdownOption[] = [
  { key: 'temp1', text: '1.0' },
  { key: 'temp2', text: '1.1' },
  { key: 'temp3', text: '1.2' },
];

// TODO: Make a reusable class for the components
// Title Bar
function TitleBar() {
  
  const titleClass = mergeStyleSets({ "display": "inline-block", "marginLeft": "10px", "verticalAlign": "top" })

  return (
    <nav role="menubar">
      <div style={{ width: "100%" }}>
        <div style={{ display: "inline-block", padding: "11px 12px 0px" }}>
          <Text nowrap variant="xxLarge"><span style={{ "color": "blue", "marginLeft": "2px" }}>Asteroid</span> Tool</Text>
        </div>
        <ToggleButton/>
      </div>
    </nav>
  )
}

// Components & Styles
const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };

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

// returns back to Homepage
function ReturnButton() {

  const addFriendIcon: IIconProps = {
    iconName: 'ReturnToSession',
    styles: {
      root: { color: 'white' },
    }
  };

  return (
    <PrimaryButton
      iconProps={addFriendIcon}
      text='Back to Homepage'
    />
  );
}

// Text area at left side of the page
function ExplanationArea() {
  
  const explanationClass = mergeStyleSets({
    wrapper: {
      height: 400,
      width: 400,
      padding: 20,
      overflow: 'auto',
      border: '1px solid #ccc',
      borderRadius: 4,
      backgroundColor: '#fff'
    },
  });

  return (
    <div className={explanationClass.wrapper}>
      <Text variant="medium">
        Asteroid is a tool to help you get started with your journey to cloud. It is a simple tool that will help you to deploy a reference architecture on Azure. Asteroid is based on the Azure Enterprise-Scale Reference Architecture. It is a set of templates that will help you to deploy a landing zone for your cloud journey. The landing zone will help you to manage your cloud environment in a secure and compliant way. It will also help you to manage your subscriptions and resources in a structured way. The landing zone is based on the concept of a hub and spoke network topology. The hub is the central part of the landing zone. It is the place where you will manage your subscriptions and resources. The spokes are the parts of the landing zone that are used to deploy your workloads. The spokes are connected to the hub by a virtual network peering. The landing zone is deployed in a single subscription. The hub is deployed in a management subscription. The spokes are deployed in workload subscriptions. The workload subscriptions are managed by the hub. The hub is deployed in a management subscription. The spokes are deployed in workload subscriptions. The workload subscriptions are managed by the hub.
      </Text>
    </div>
  );
}