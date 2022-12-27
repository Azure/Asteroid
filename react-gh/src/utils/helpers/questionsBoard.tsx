import { Label, Link, Stack } from "@fluentui/react";
import { Input, RadioGroup, Radio } from "@fluentui/react-components";

// Local imports
import data from "../data.json";

export const adv_stackstyle = {
  root: { border: "1px solid", margin: "10px 0 10px", padding: "15px" },
};

const questionStyle = { paddingLeft: "100px" };
const radioStyle = { border: "1px solid" };

// Output questions from JSON KnowledgeBase file
export function categoryQuestions(category: string) {
  const renderQuestionsByCategory = data.map((parent) => {
    if (parent.Parent.CategoryID == category) {
      return (
        // html div with padding left to indent the question
        <div className="Parent Question" style={questionStyle}>
          <Label id="QuestionTitle">{parent.Parent.Question}</Label>
          {renderAnswers(parent.Parent.AnswerType, parent.Parent.Answers)}
          {parent.Childs.map((child) => {
            if (parent.Parent.AnswerChoice == true)
              return (
                <div className="Child Question" style={questionStyle}>
                  <Label id="QuestionTitle">{child.Parent.Question}</Label>
                  {renderAnswers(child.Parent.AnswerType, child.Parent.Answers)}
                  {child.Childs.map((grandchild) => {
                    if (child.Parent.AnswerChoice == true)
                      return (
                        <div
                          className="GrandChild Question"
                          style={questionStyle}
                        >
                          <Label id="QuestionTitle">
                            {grandchild.Parent.Question}
                          </Label>
                          {renderAnswers(
                            grandchild.Parent.AnswerType,
                            grandchild.Parent.Answers
                          )}
                        </div>
                      );
                  })}
                </div>
              );
          })}
        </div>
      );
    }
    return null;
  });

  return (
    <Stack tokens={{ childrenGap: 15 }} styles={adv_stackstyle}>
      <Label style={{}}>{category}</Label>
      {renderQuestionsByCategory
        .filter((c, i) => c != null)
        .map((c, i) => (
          <div key={i}>{c}</div>
        ))}
    </Stack>
  );
}

function renderAnswers(answerType: string, answers: string[]) {
  switch (answerType) {
    case "boolean":
      return (
        <RadioGroup aria-labelledby="label835">
          <Radio label="Yes" value="true" />
          <Radio label="No" value="false" />
        </RadioGroup>
      );
    case "stringInput":
      return <Input id="Input0" placeholder={answers[0]} />;
    case "stringSelection":
      return (
        <RadioGroup aria-labelledby="label935">
          {answers.map((answer) => {
            return <Radio label={answer} value={answer} />;
          })}
        </RadioGroup>
      );
    default:
      break;
  }
}
