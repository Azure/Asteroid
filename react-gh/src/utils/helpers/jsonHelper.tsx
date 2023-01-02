import data from "../data.json";

// Basic JSON ELement
export type DataItem = {
  ID: string;
  Parameter: string;
  CategoryID: string;
  Question: string;
  AnswerType: string;
  AnswerChoice: string | boolean | number;
  Answers: string[];
  Explanation: string;
  ExplanationLearnLink: string;
  ExplanationVideoLink: string;
};

// Data Structure with flexible depth levels
export type DataStructure = {
  Parent: DataItem;
  Childs: DataStructure[];
};

export var FlatFilteredData: DataItem[] = [];
var flatMap = flattenMap(data);
export const RawData: DataStructure[] = data;
export var KeyValueMap: any = keyValueGenerator();

export function setJsonData(newData: DataItem[]) {
  FlatFilteredData = newData;
}

// Output JSON parameters file
// TODO: Parameter File Creation

function flattenMap(data: DataStructure[]) {
  var flatData = [];

  for (const parent of data) {
    flatData.push(parent.Parent);

    for (const child of parent.Childs) {
      flatData.push(child.Parent);

      for (const grandchild of child.Childs) {
        flatData.push(grandchild.Parent);
      }
    }
  }

  return flatData;
}

export function flatMapSelecter(
  Public: boolean,
  HubAndSpoke: boolean,
  VWAN: boolean
) {
  var flatMap = flattenMap(data);

  if (Public) {
    return flatMap.filter(
      (item) =>
        item.CategoryID !== "Hub and Spoke" &&
        item.CategoryID !== "Virtual WAN (Microsoft managed)"
    );
  } else if (HubAndSpoke) {
    if (HubAndSpoke === true) {
      return flatMap.filter(
        (item) => item.CategoryID !== "Virtual WAN (Microsoft managed)"
      );
    }
  } else if (VWAN) {
    return flatMap.filter((item) => item.CategoryID !== "Hub and Spoke");
  }
  return flatMap;
}

function keyValueGenerator() {
  var keyValueMap: any = {};

  for (var e in flatMap) {
    let i = parseInt(e);

    let parameterName = flatMap[i].Parameter;

    keyValueMap[parameterName] = { value: flatMap[i].AnswerChoice };
  }

  return keyValueMap;
}

// Output JSON parameters file
export function parameterFileGenerator() {
  const outputFile = [];

  var parametersArray: any = KeyValueMap;

  outputFile.push({
    $schema:
      "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
    contentVersion: "1.0.0.0",
    parameters: parametersArray,
  });

  return outputFile[0];
}

export const updateKeyMap = (key: string, value: string) => {
  KeyValueMap[key].value = value;
};
