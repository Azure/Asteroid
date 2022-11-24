import { CodeBlock, atomOneDark} from "react-code-blocks";

//  Interface
interface CodeboxInterface {
    code: string;
    language: string;
    showLineNumbers: boolean;
    startingLineNumber: number;
  }
// Component
export const Codebox: React.FunctionComponent<CodeboxInterface> = ({ code, language, showLineNumbers, startingLineNumber}) => {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={atomOneDark}
    />
  );
}
