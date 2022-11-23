import { IIconProps, PrimaryButton } from "@fluentui/react";

// Explanation Button with Question Icon
export function ExplanationButton() {

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