import { mergeStyleSets } from "@fluentui/merge-styles";
import { FontSizes, Separator, Stack, Toggle, Link as ReactLink, Text, FontWeights, IStackStyles, IStackTokens, ITextStyles } from "@fluentui/react";
import { ToggleButton } from "./ToggleMode";

// Footer
export function Footer() {
  const titleClass = mergeStyleSets({
    display: "inline-block",
    marginLeft: "10px",
    verticalAlign: "top",
  });

  return (
    <footer>
      <br />
      <br />
      <Separator />

      <Stack horizontalAlign="center" verticalAlign="center" verticalFill>
        <Text variant="large" styles={boldStyle}>
          Essential links
        </Text>
        <br />
        <Stack horizontal tokens={stackTokens} horizontalAlign="center">
          <ReactLink href="https://github.com/Azure/Asteroid">
            Project Github
          </ReactLink>
          <ReactLink href="https://github.com/Azure/Enterprise-Scale">
            Azure Enterpise-Scale Reference
          </ReactLink>
          <ReactLink href="https://developer.microsoft.com/en-us/fluentui#/controls/web">
            Fluent UI Components
          </ReactLink>
        </Stack>
      </Stack>
    </footer>
  );
}

const stackTokens: IStackTokens = { childrenGap: 40 };

const boldStyle: Partial<ITextStyles> = {
    root: { fontWeight: FontWeights.semibold },
  };
  const stackStyles: Partial<IStackStyles> = {
    root: {
      width: "1300px",
      margin: "0 auto",
      textAlign: "center",
      color: "#605e5c",
    },
  };