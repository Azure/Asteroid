import { Link } from "react-router-dom";
import * as React from 'react';
import { Dropdown, Image, Label, Pivot, PivotItem, PrimaryButton, Separator, Stack, Text, TextField, Toggle, IIconProps, IDropdownOption, IDropdownStyles, ILabelStyles, IPivotItemProps, IStyleSet, ThemeProvider } from '@fluentui/react';
import { Link as ReactLink } from '@fluentui/react';
import { AzureThemeLight, AzureThemeDark } from '@fluentui/azure-themes';
import { mergeStyles, mergeStyleSets } from '@fluentui/merge-styles';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

const deploycmd =
  `PlaceholderPlaceholderPlaceholder\n` +
  `PlaceholderPlaceholderPlaceholder\n` +
  `PlaceholderPlaceholderPlaceholder\n` +
  `PlaceholderPlaceholderPlaceholder\n` + ""

const Page1 = () => {

  const [lastHeader, setLastHeader] = React.useState<{ props: IPivotItemProps } | undefined>(undefined);
  // Selects the theme dependent on the preferred color scheme of user: Light or Dark
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const { semanticColors, palette } = dark ? AzureThemeDark : AzureThemeLight;
  const current_theme = dark ? AzureThemeDark : AzureThemeLight;
  
  return (
    <ThemeProvider applyTo='body' theme={{ semanticColors, palette }}>

      <div>
        <TitleBar />
        <Label>Design Area: {lastHeader?.props.headerText}</Label>
        <Pivot aria-label="OnChange Pivot Example" linkSize="large" linkFormat="tabs" onLinkClick={setLastHeader}>
          <PivotItem headerText="Networking">
            <Label styles={labelStyles}>Pivot #1</Label>
            <Separator styles={{ root: { marginTop: '30px !important' } }}><div style={{ display: "flex", alignItems: 'center', }}><b style={{ marginRight: '10px' }}>Deploy Cluster</b><Image src="./bicep.png" alt="Built with bicep" /> <p style={{ marginLeft: '10px' }}>powered by Bicep</p></div>
            </Separator>
          </PivotItem>
          <PivotItem headerText="Security">
            <Label styles={labelStyles}>
              Pivot #2
            </Label>
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
          <PivotItem headerText="Command Line" itemKey="deployArmCli" itemIcon="PasteAsCode" >
            <Stack horizontal horizontalAlign="space-between" styles={{ root: { width: '100%', marginTop: '10px' } }}>
              <Stack.Item>
                <Label >Commands to deploy your fully operational environment</Label>
                <Text>
                  Requires <ReactLink href="https://docs.microsoft.com/cli/azure/install-azure-cli" underline> AZ CLI (2.37.0 or greater) </ReactLink>, or execute in the <ReactLink href="http://shell.azure.com/" underline> Azure Cloud Shell </ReactLink>.
                </Text>
              </Stack.Item>

              <Stack.Item align="end">
                <Stack horizontal tokens={{ childrenGap: 5 }}>
                  <Dropdown
                    // errorMessage={getError(invalidArray, 'selectedTemplate')}
                    label='Template Version'
                    selectedKey={"temp1"}
                    // onChange={(ev, { key }) => updateFn('selectedTemplate', key)}
                    options={options}
                    styles={dropdownStyles}
                  />
                </Stack>
              </Stack.Item>
            </Stack>
            {/* <CodeBlock  deploycmd={deploycmd} testId={'deploy-test-gh'} lang="bash" filename={undefined} error={undefined}/> */}
            <Separator styles={{ root: { marginTop: '30px !important' } }}><div style={{ display: "flex", alignItems: 'center', }}><b style={{ marginRight: '10px' }}>Get started with your journey to Cloud!</b><Image src="./Images\bicep.png" alt="Built with bicep" /> <p style={{ marginLeft: '10px' }}>powered by Bicep</p></div>
            </Separator>

          </PivotItem>
        </Pivot>
      </div>
    </ThemeProvider>

  );
}
export default Page1;

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
        <div style={{ display: "inline-block", padding: "11px 12px 70px" }}>
          <Text nowrap variant="xxLarge"><span style={{ "color": "blue", "marginLeft": "2px" }}>Asteroid</span> Tool</Text>
        </div>
        <ToggleButton />
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
      onClick={_alertClicked}
    />
  );
}

// put CustomButton in a variable
function CustomButton(button_text: string | undefined, button_icon: any): JSX.Element {
  const selectedIcon: IIconProps = {
    iconName: button_icon,
    styles: {
      root: { color: 'white' }
    }
  };

  return (
    <PrimaryButton
      iconProps={selectedIcon}
      text={button_text}
      onClick={_alertClicked} />
  );
}

// // Code Block
// function CodeBlock({ deploycmd, testId, lang, filename, error }: { deploycmd: string | undefined; testId: string; lang: string; filename?: string; error?: string; }) {
//   const [code, setCode] = React.useState(deploycmd);
//   const [language, setLanguage] = React.useState(lang);
//   const [filename_, setFilename] = React.useState(filename);
//   const [error_, setError] = React.useState(error);

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <CodeSnippet
//         testId={testId}
//         code={code}
//         language={language}
//         filename={filename_}
//         error={error_}
//       />
//     </div>
//   );
// }
