import { Label, Link, Stack } from "@fluentui/react";
import { IQChoice } from "../../components/QIcheckbox";
import { QChoice } from "../../components/q_checkbox";
// Local imports
import data from "../data.json";

export const adv_stackstyle = {
    root: { border: "1px solid", margin: "10px 0 10px", padding: "15px" },
  };

// Output questions from JSON KnowledgeBase file
export function categoryQuestions(category: string) {

    var questions:any = {};

    const paramsByCategory = data.map((param) => {
        if (param.Parent.CategoryID == category)
          return (
            <Stack tokens={{ childrenGap: 15 }} style={{ marginTop: 0, marginLeft: "50px" }}>
                <Stack horizontal tokens={{}}>
                    <Stack.Item>
                        <Label style={{}}>
                        {param.Parent.Question + " "}
                        <Link
                            target="_"
                            href={param.Parent.ExplanationLearnLink}
                        >
                            docs
                        </Link>
                        </Label>
                        <QChoice text1={String(param.Parent.Answers[0])} text2={String(param.Parent.Answers[1])} />
                    </Stack.Item>
                </Stack>
            </Stack>
          );
        return null;
      });

return ( 
<Stack tokens={{ childrenGap: 15 }} styles={adv_stackstyle}>
    <Label style={{}}>
        {category}
    </Label>
    {paramsByCategory.filter((c, i) => c != null ).map((c, i) =>
        <div key={i}>{c}</div>
    )}
</Stack>)
};
