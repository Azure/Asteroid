import { IIconProps, Panel, PanelType, PrimaryButton } from "@fluentui/react";
import { useBoolean } from '@fluentui/react-hooks';

//  Interface
interface ExplenationInterface {
  headerText: string;
  explanationText: string;
  videoTitle: string;
  explanationVideo: string;
}


//  Component
export const ExplanationButton: React.FunctionComponent<ExplenationInterface> = ({ headerText, explanationText, videoTitle, explanationVideo }) => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

  // Explenation Button with Icon
  const addFriendIcon: IIconProps = {
    iconName: 'Unknown',
    styles: {
      root: { color: 'white' }
    }
  };

  return (
    <div>
      <PrimaryButton
        iconProps={addFriendIcon}
        text='Explanation'
        onClick={openPanel}
      />
      <Panel
        headerText={headerText}
        isOpen={isOpen}
        onDismiss={dismissPanel}
        type={PanelType.medium}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        <iframe src={explanationVideo} title={videoTitle} width="560" height="315" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        <p>{explanationText}</p>
      </Panel>
    </div>
  );
};