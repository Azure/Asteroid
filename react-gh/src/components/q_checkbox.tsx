import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';

//  Interface
interface ChoiceQInterface {
    text1: string,
    text2: string
}


//  Component
export const QChoice: React.FunctionComponent<ChoiceQInterface> = ({text1, text2}) => {
    const [selectedKey, setSelectedKey] = React.useState<string | undefined>('B');

    const options: IChoiceGroupOption[] = [
        { key: 'A', text: text1 },
        { key: 'B', text: text2 }
      ];

    // const onChange = React.useCallback((ev: React.SyntheticEvent<HTMLElement>, option: IChoiceGroupOption) => {
    //   setSelectedKey(option.key);
    // }, []);
  
    return <ChoiceGroup selectedKey={selectedKey} options={options}/>;
  };