import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  Input,
  useId,
  Text,
  Subtitle2,
  Button,
  FluentProvider,
  Persona
} from "@fluentui/react-components";

import * as React from "react";

import { SendRegular } from "@fluentui/react-icons";

export const Chat: React.FunctionComponent = ({}) => {
  const underlineId = useId("input-underline");
  return (
    <FluentProvider>
    <Dialog modalType="non-modal">
      <DialogTrigger disableButtonEnhancement>
        <Button appearance="transparent">
          <Persona
            name="CS·AI Bot"
            size="huge"
            secondaryText="Ask Azure Questions"
            presence={{ status: "available" }}
            avatar={{
              image: {
                src: "https://i.pinimg.com/originals/9c/da/64/9cda6405c91f0a6060592638e58932c4.gif",
              },
            }}
          />
        </Button>
      </DialogTrigger>
      <DialogSurface style={{ marginRight: "20px", marginBottom: "20px" }}>
        <DialogBody>
          <DialogTitle>Speak to CS·AI</DialogTitle>
          <DialogContent>
            <div>
              <Subtitle2>Chat</Subtitle2>
            </div>
            <div style={{ textAlign: "center" }}>
              <Text align="center" size={200}>
                {new Date().toLocaleTimeString()}
              </Text>
            </div>
            <div style={{ textAlign: "right" }}>
              <Text>
                This is an example of the most recent ChatGPT Question.{" "}
              </Text>
            </div>
            <br />
            <div style={{ textAlign: "left" }}>
              <Text font="monospace">
                This is an example of the most recent ChatGPT Reply.
              </Text>
            </div>
            <br />
            <div style={{ width: "100%" }}>
              <Input
                appearance="underline"
                contentAfter={
                  <Button appearance="transparent" icon={<SendRegular />} />
                }
                id={underlineId}
                style={{ width: "100%" }}
              />
            </div>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
    </FluentProvider>
  );
};
