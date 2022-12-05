import data from "../data.json";

// Output JSON parameters file
export function formaterDonnees(data1: string) {

    const expectedArr = [];
    let parameters1 = [];

    for (var e in data) {
    let i = parseInt(e);

    let parameter_name = data[i].Parent.Parameter;
    parameters1.push({
            [parameter_name] :             
            {
                value: data[i].Parent.Answers[0]
            }
        });
    }

    // Initial declaration
    expectedArr.push({
        $schema: "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
        contentVersion: "1.0.0.0",
        parameters: parameters1
    });

    return expectedArr[0];
};