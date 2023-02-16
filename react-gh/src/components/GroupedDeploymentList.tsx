import { FluentProvider } from "@fluentui/react-components";
import * as React from "react";
import { currentTheme } from "../index";
import {
  TableColumnDefinition,
  TableCellLayout,
  createTableColumn,
  DataGrid,
  DataGridBody,
  DataGridRow,
  DataGridHeader,
  DataGridCell,
  DataGridHeaderCell,
  TableRowData,
} from "@fluentui/react-components";
import { DataItem, flatMapSelecter } from "../utils/helpers/jsonHelper";
import { state } from "../components/TemplateSelection";

export const GroupedDeploymentList: React.FunctionComponent = () => {
  return (
    <FluentProvider theme={currentTheme}>
      <br />
      <br />
      {Sort()}
    </FluentProvider>
  );
};

export const Sort = () => {
  const columns: TableColumnDefinition<DataItem>[] = React.useMemo(
    () => [
      createTableColumn<DataItem>({
        columnId: "category",
        compare: (a, b) => {
          return a.CategoryID.localeCompare(b.CategoryID);
        },
        renderHeaderCell: () => {
          return "Category";
        },
        renderCell: (item) => {
          return item.CategoryID;
        },
      }),
      createTableColumn<DataItem>({
        columnId: "parameter",
        compare: (a, b) => {
          return a.Parameter.localeCompare(b.Parameter);
        },
        renderHeaderCell: () => {
          return "Parameter";
        },
        renderCell: (item) => {
          return <TableCellLayout>{item.Parameter}</TableCellLayout>;
        },
      }),
      createTableColumn<DataItem>({
        columnId: "value",
        compare: (a, b) => {
          return String(a.AnswerChoice).localeCompare(String(b.AnswerChoice));
        },
        renderHeaderCell: () => {
          return "Value";
        },
        renderCell: (item) => {
          return <TableCellLayout>{item.AnswerChoice}</TableCellLayout>;
        },
      }),
    ],
    []
  );
  var items = flatMapSelecter(
    state.endPublic,
    state.endHubAndSpoke,
    state.endVWAN
  );
  return (
    <DataGrid items={items} columns={columns} sortable>
      <DataGridHeader>
        <DataGridRow>
          {({ renderHeaderCell }: TableColumnDefinition<DataItem>) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody>
        {({ item, rowId }: TableRowData<DataItem>) => (
          <DataGridRow key={rowId}>
            {({ renderCell }: TableColumnDefinition<DataItem>) => (
              <DataGridCell>{renderCell(item)}</DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};
Sort.parameters = {
  docs: {
    description: {
      story: [
        "To enable sorting, the `sortable` prop needs to be set. The API surface is directly",
        "equivalent to the usage of `useTableFeatures`.",
      ].join("\n"),
    },
  },
};
