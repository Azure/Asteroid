import * as React from "react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  Input,
  useId,
  Subtitle2,
  Body2,
  tokens,
  Button,
  FluentProvider,
  Persona,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";
import { SendRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  userChatBubble: {
    backgroundColor: tokens.colorBrandForegroundInverted,
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    ...shorthands.padding("8px"),
  },
  aiChatBubble: {
    backgroundColor: tokens.colorBrandForegroundInverted,
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    ...shorthands.padding("8px"),
    inlineSize: "100px",
    overflowWrap: "break-word",
  },
  generalChatBubble: {},
});

export const Chat: React.FunctionComponent = () => {
  const styling = useStyles();

  let [message, setMesssage] = useState<string>("");
  let [chatContent, setChatContent] = useState<string[]>([]);

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
              <div>
                {chatContent.map((message, index) =>
                  // If the index is even, it is the user's message and should be right aligned and vice versa
                  index % 2 === 0 ? (
                    <div>
                      <>
                        <br />
                      </>
                      <div
                        className={styling.generalChatBubble}
                        style={{ textAlign: "right" }}
                      >
                        <Body2 className={styling.userChatBubble}>
                          {message}
                        </Body2>{" "}
                      </div>
                      <>
                        <br />
                      </>
                    </div>
                  ) : (
                    <div style={{ textAlign: "left" }}>
                      <Body2 className={styling.aiChatBubble}>{message}</Body2>{" "}
                      <br />
                    </div>
                  )
                )}
              </div>
              <br />
              <div style={{ width: "100%" }}>
                <Input
                  appearance="underline"
                  contentAfter={
                    <Button
                      appearance="transparent"
                      icon={<SendRegular />}
                      onClick={() => {
                        setMesssage("");
                        setChatContent([
                          ...chatContent,
                          message,
                          "This feature is coming soon! 🚀",
                        ]);
                      }}
                    />
                  }
                  id={underlineId}
                  style={{ width: "100%" }}
                  value={message}
                  onChange={(e, data) => setMesssage(data.value)}
                />
              </div>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </FluentProvider>
  );
};
