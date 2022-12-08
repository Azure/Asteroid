import data from "../data.json";

// Output JSON parameters file
export function formaterDonnees(data1: string) {

    const expectedArr = [];
    // let parameters1 = [];
    var parameters1:any = {};

    for (var e in data) {
    let i = parseInt(e);

    let parameter_name = data[i].Parent.Parameter;

    parameters1[parameter_name] = {
        value: data[i].Parent.Answers[0]
    }

    // parameters1.push({
    //         [parameter_name] :             
    //         {
    //             value: data[i].Parent.Answers[0]
    //         }
    //     });

    // parameters1.push(tmp);

    
    // if(parameters1){

    // }

    // for (var e2 in data[i].Childs) {
    //     let i2 = parseInt(e2);
    //     let parameter_name2 = data[i].Childs[i2];
    //     parameters1.push({
    //         [e2] :             
    //         {
    //             value: data[i].Childs[i2].Parent.Answers[0]
    //         }
    //     });	
    
    }

    // Initial declaration
    expectedArr.push({
        $schema: "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
        contentVersion: "1.0.0.0",
        parameters: parameters1
    });

    return expectedArr[0];
};