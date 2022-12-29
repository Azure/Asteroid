import data from "../data.json";
import { state } from "../../components/TemplateSelection";

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

export var flatFilteredData = flatMapSelecter(
  state.endPublic,
  state.endHubAndSpokeWithFirewall,
  state.endHubAndSpokeWithoutFirewall,
  state.endVWAN
);

export function setJsonData(newData: DataItem[]) {
  flatFilteredData = newData;
}

// Output JSON parameters file
// TODO: Parameter File Creation

function jsonFlatMap(
  data: DataStructure[],
  parentCategory: string,
  childCategory: string,
  grandChildCategory: string
) {
  var flatData = [];

  for (const parent of data) {
    if (
      parent.Parent.CategoryID === parentCategory ||
      [
        "Identity",
        "Azure Core Setup",
        "Platform management, security, and governance",
        "Platform DevOps and automation",
        "Landing zones configuration",
      ].includes(parent.Parent.CategoryID)
    )
      flatData.push(parent.Parent);

    for (const child of parent.Childs) {
      if (
        child.Parent.CategoryID.startsWith(childCategory) ||
        [
          "Identity",
          "Azure Core Setup",
          "Platform management, security, and governance",
          "Platform DevOps and automation",
          "Landing zones configuration",
        ].includes(child.Parent.CategoryID)
      )
        flatData.push(child.Parent);

      for (const grandchild of child.Childs) {
        if (
          grandchild.Parent.CategoryID === grandChildCategory ||
          [
            "Identity",
            "Azure Core Setup",
            "Platform management, security, and governance",
            "Platform DevOps and automation",
            "Landing zones configuration",
          ].includes(grandchild.Parent.CategoryID)
        )
          flatData.push(grandchild.Parent);
      }
    }
  }

  return flatData;
}

export function flatMapSelecter(
  Public: boolean,
  HubAndSpokeWithFirewall: boolean,
  HubAndSpokeWithoutFirewall: boolean,
  VWAN: boolean
) {
  if (Public === true) {
    return jsonFlatMap(
      data,
      "No Hybrid Connectivity",
      "No Hybrid Connectivity",
      "No Hybrid Connectivity"
    );
  } else if (HubAndSpokeWithFirewall || HubAndSpokeWithoutFirewall) {
    if (HubAndSpokeWithFirewall === true) {
      return jsonFlatMap(
        data,
        "Hub and Spoke",
        "Hub and Spoke",
        "Hub and Spoke with Azure Firewall"
      );
    } else {
      return jsonFlatMap(
        data,
        "Hub and Spoke",
        "Hub and Spoke",
        "Hub and Spoke"
      );
    }
  } else if (VWAN) {
    return jsonFlatMap(
      data,
      "Hub and Spoke",
      "Virtual WAN (Microsoft managed)",
      "Virtual WAN (Microsoft managed)"
    );
  }
  return jsonFlatMap(data, "", "", "");
}

// Output JSON parameters file
export function parameterFileGenerator(data: DataItem[]) {
  const outputFile = [];

  var parametersArray: any = {};

  for (var e in data) {
    let i = parseInt(e);

    let parameterName = data[i].Parameter;

    parametersArray[parameterName] = {
      value: data[i].AnswerChoice,
    };
  }

  outputFile.push({
    $schema:
      "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
    contentVersion: "1.0.0.0",
    parameters: parametersArray,
  });

  return outputFile[0];
}
