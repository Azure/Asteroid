import {
  makeStyles,
  shorthands,
  Label,
  Input,
  RadioGroup,
  Radio,
  Link,
  RadioOnChangeData,
  InputOnChangeData,
} from "@fluentui/react-components";
import { InfoButton } from "@fluentui/react-components/unstable";
import { setStorage } from "./jsonHelper";
import * as React from "react";
// Local imports
import data from "../data.json";

const styles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("20px"),
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": {
      display: "flex",
      flexDirection: "column",
      ...shorthands.gap("2px"),
    },
  },
});

// Styles
const questionStyle = {
  paddingLeft: "100px",
  width: "400px",
  marginTop: "20px",
};

// Output questions from JSON KnowledgeBase file
export function CategoryQuestions(
  parentCategory: string,
  childCategory: string,
  grandChildCategory: string
) {
  const renderQuestionsByCategory = data.map((parent) => {
    if (parent.Parent.CategoryID === parentCategory) {
      return (
        <div className="Parent Question" style={questionStyle}>
          <Label id="QuestionTitle">{parent.Parent.Question}</Label>
          {renderInfoButton(
            parent.Parent.ExplanationLearnLink,
            parent.Parent.Explanation
          )}
          {RenderAnswers(
            parent.Parent.Parameter,
            parent.Parent.AnswerType,
            parent.Parent.Answers
          )}
          {parent.Childs.map((child) => {
            if (child.Parent.CategoryID.startsWith(childCategory))
              return (
                <div className="Child Question" style={questionStyle}>
                  <Label id="QuestionTitle">{child.Parent.Question}</Label>
                  {renderInfoButton(
                    child.Parent.ExplanationLearnLink,
                    child.Parent.Explanation
                  )}
                  {RenderAnswers(
                    child.Parent.Parameter,
                    child.Parent.AnswerType,
                    child.Parent.Answers
                  )}
                  {child.Childs.map((grandchild) => {
                    if (grandchild.Parent.CategoryID === grandChildCategory)
                      return (
                        <div
                          className="GrandChild Question"
                          style={questionStyle}
                        >
                          <Label id="QuestionTitle">
                            {grandchild.Parent.Question}
                          </Label>
                          {renderInfoButton(
                            grandchild.Parent.ExplanationLearnLink,
                            grandchild.Parent.Explanation
                          )}
                          {RenderAnswers(
                            grandchild.Parent.Parameter,
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

  const styleClass = styles();

  return (
    <div className={styleClass.root}>
      {renderQuestionsByCategory
        .filter((c, i) => c != null)
        .map((c, i) => (
          <div key={i}>{c}</div>
        ))}
    </div>
  );
}

function RenderAnswers(
  parameter: string,
  answerType: string,
  answers: string[]
) {
  const [value, setValue] = React.useState("");

  const HandleRadioChange = React.useCallback(
    (
      ev: React.FormEvent<HTMLElement | HTMLInputElement>,
      newValue: RadioOnChangeData
    ) => {
      setValue(newValue.value);
      setStorage(parameter, newValue.value);
    },
    [parameter]
  );

  const HandleInputChange = React.useCallback(
    (
      ev: React.FormEvent<HTMLElement | HTMLInputElement>,
      newValue: InputOnChangeData
    ) => {
      setValue(newValue.value);
      setStorage(parameter, newValue.value);
    },
    [parameter]
  );

  switch (answerType) {
    case "boolean":
      return (
        <RadioGroup
          aria-labelledby={parameter}
          name={parameter}
          onChange={HandleRadioChange}
        >
          <Radio name={parameter} label="Yes" value="Yes" />
          <Radio name={parameter} label="No" value="No" />
        </RadioGroup>
      );
    case "stringInput":
      return (
        <div>
          <Input
            id="Input0"
            placeholder={answers[0]}
            onChange={HandleInputChange}
          />
        </div>
      );
    case "stringSelection":
      return (
        <RadioGroup aria-labelledby="label935">
          {answers.map((answer) => {
            return <Radio label={answer} value={answer} />;
          })}
        </RadioGroup>
      );
    default:
      return (
        <div>
          <Input id="Input0" placeholder={answers[0]} />
        </div>
      );
  }
}

function renderInfoButton(ExplanationLearnLink: string, Explanation: string) {
  return (
    <InfoButton
      content={
        <>
          {Explanation}
          <Link href={ExplanationLearnLink}>Learn more</Link>
        </>
      }
    />
  );
}
