import { Stack, IStackTokens } from "@fluentui/react";
import { Text, Link, Divider } from "@fluentui/react-components";

// Footer
export function Footer() {

  return (
    <footer>
      <br />
      <br />
      <Divider appearance="strong"></Divider>
      <br />
      <Stack horizontalAlign="center" verticalAlign="center" verticalFill>
        <Text size={300} weight="bold">
          Essential links
        </Text>
        <br />
        <Stack horizontal tokens={stackTokens} horizontalAlign="center">
          <Link href="https://github.com/Azure/Asteroid">Project Github</Link>
          <Link href="https://github.com/Azure/Enterprise-Scale">
            Azure Enterpise-Scale Reference
          </Link>
          <Link href="https://developer.microsoft.com/en-us/fluentui#/controls/web">
            Fluent UI Components
          </Link>
        </Stack>
      </Stack>
    </footer>
  );
}

const stackTokens: IStackTokens = { childrenGap: 40 };
