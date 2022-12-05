import * as React from 'react';
import { GroupedList, IGroup } from '@fluentui/react/lib/GroupedList';
import { IColumn, DetailsRow } from '@fluentui/react/lib/DetailsList';
import { Selection, SelectionMode, SelectionZone } from '@fluentui/react/lib/Selection';
import { IToggleStyles } from '@fluentui/react/lib/Toggle';
import { useConst } from '@fluentui/react-hooks';
import { createListItems, createGroups, IExampleItem } from '@fluentui/example-data';

const toggleStyles: Partial<IToggleStyles> = { root: { marginBottom: '20px' } };
const groupCount = 3;
const groupDepth = 3;
const items = createListItems(Math.pow(groupCount, groupDepth + 1));
const columns = Object.keys(items[0])
  .slice(0, 3)
  .map(
    (key: string): IColumn => ({
      key: key,
      name: key,
      fieldName: key,
      minWidth: 300,
    }),
  );

const groups = createGroups(groupCount, groupDepth, 0, groupCount);

export const GroupedDeploymentList: React.FunctionComponent = () => {
  const selection = useConst(() => {
    const s = new Selection();
    s.setItems(items, true);
    return s;
  });

  const onRenderCell = (
    nestingDepth?: number,
    item?: IExampleItem,
    itemIndex?: number,
    group?: IGroup,
  ): React.ReactNode => {
    return item && typeof itemIndex === 'number' && itemIndex > -1 ? (
      <DetailsRow
        columns={columns}
        groupNestingDepth={nestingDepth}
        item={item}
        itemIndex={itemIndex}
        selection={selection}
        selectionMode={SelectionMode.none}
        compact={false}
        group={group}
      />
    ) : null;
  };

  return (
    <div>
      <SelectionZone selection={selection} selectionMode={SelectionMode.none}>
        <GroupedList
          items={items}
          // eslint-disable-next-line react/jsx-no-bind
          onRenderCell={onRenderCell}
          selection={selection}
          selectionMode={SelectionMode.none}
          groups={groups}
          compact={false}
        />
      </SelectionZone>
    </div>
  );
};
