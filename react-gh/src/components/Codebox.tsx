import { CodeBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import { darkThemeEnabled } from "../index";

//  Interface
interface CodeboxInterface {
  code: string;
  language: string;
  showLineNumbers: boolean;
  startingLineNumber: number;
}
// Component
export const Codebox: React.FunctionComponent<CodeboxInterface> = ({
  code,
  language,
  showLineNumbers,
  startingLineNumber,
}) => {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={darkThemeEnabled ? atomOneDark : atomOneLight}
    />
  );
};
