import data from "../data.json";

// Basic JSON ELement
export type DataItem = {
  ID: string;
  Parameter: string;
  CategoryID: string;
  Question: string;
  AnswerType: string;
  AnswerChoice: string | boolean | number | null | string[];
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

var flatMap = flattenMap(data);

export var KeyValueMap: any = getStorage();

export function getStorage() {
  if (!storageAvailable()) {
    localStorage.setItem("KeyValueMap", JSON.stringify(keyValueGenerator()));
    return keyValueGenerator();
  } else {
    const storageObject = localStorage.getItem("KeyValueMap");
    return JSON.parse(storageObject!);
  }
}

export function deleteStorage() {
  localStorage.removeItem("KeyValueMap");
}

export const setStorage = (key: string, value: string | string[]) => {
  KeyValueMap = getStorage();
  KeyValueMap[key].value = value;
  localStorage.setItem("KeyValueMap", JSON.stringify(KeyValueMap));
};

export function storageAvailable() {
  return localStorage.getItem("KeyValueMap") !== null;
}

export function getStorageElement(parameter: string) {
  if (storageAvailable()) return KeyValueMap[parameter].value;
  else return "";
}

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
    flatMap = flatMap.filter(
      (item) =>
        item.CategoryID !== "Hub and Spoke" &&
        item.CategoryID !== "Virtual WAN (Microsoft managed)"
    );
  } else if (HubAndSpoke) {
    if (HubAndSpoke === true) {
      flatMap = flatMap.filter(
        (item) => item.CategoryID !== "Virtual WAN (Microsoft managed)"
      );
    }
  } else if (VWAN) {
    flatMap = flatMap.filter((item) => item.CategoryID !== "Hub and Spoke");
  }
  flatMap = flatMapDataUpdater(flatMap);
  return flatMap;
}

function flatMapDataUpdater(flatMap: DataItem[]) {
  KeyValueMap = getStorage();

  for (var e of flatMap) {
    let parameterName = e.Parameter;

    e.AnswerChoice = KeyValueMap[parameterName].value;
  }

  return flatMap;
}

export function keyValueGenerator() {
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

  var parametersArray: any = getStorage();

  outputFile.push({
    $schema:
      "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
    contentVersion: "1.0.0.0",
    parameters: parametersArray,
  });

  return outputFile[0];
}
