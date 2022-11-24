import { CodeBlock, atomOneDark, atomOneLight } from "react-code-blocks";

//  Interface
interface CodeboxInterface {
    code: string;
    language: string;
    showLineNumbers: boolean;
    startingLineNumber: number;
    // to change the theme change value of dark to true or false
    dark: boolean;
  }
// Component
export const Codebox: React.FunctionComponent<CodeboxInterface> = ({ code, language, showLineNumbers, startingLineNumber, dark }) => {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={dark ? atomOneDark : atomOneLight}
    />
  );
}
