import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';

//  Interface
interface IChoiceQInterface {
    text1: string,
    text2: string,
    text3: string,
}


//  Component
export const IQChoice: React.FunctionComponent<IChoiceQInterface> = ({text1, text2, text3}) => {
    const [selectedKey, setSelectedKey] = React.useState<string | undefined>('B');

    const options: IChoiceGroupOption[] = [
      {
          key: 'key1',
          iconProps: { iconName: 'Processing' },
          text: text1
      },
      {
          key: 'key2',
          iconProps: { iconName: 'OfflineStorageSolid' },
          text: text2,
          disabled: true
      },
      {
          key: 'key3',
          iconProps: { iconName: 'ScaleVolume' },
          text: text3,
          disabled: false
      }
  ];
  
    return <ChoiceGroup selectedKey={selectedKey} options={options}/>;
  };