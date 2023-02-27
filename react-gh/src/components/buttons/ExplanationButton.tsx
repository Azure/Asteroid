import {
  Button,
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogSurface,
  DialogBody,
  DialogContent,
} from "@fluentui/react-components";

import { Dismiss24Regular } from "@fluentui/react-icons";

//  Interface
interface ExplanationButtonInterface {
  headerText: string;
  explanationText: string;
  explanationVideoTitle: string;
  explanationVideoLink: string;
}

//  Component
export const ExplanationButton: React.FunctionComponent<
  ExplanationButtonInterface
> = ({ explanationText, explanationVideoTitle, explanationVideoLink }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger disableButtonEnhancement>
          <Button>Get Explanation</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle
              action={
                <DialogTrigger action="close">
                  <Button
                    appearance="subtle"
                    aria-label="close"
                    icon={<Dismiss24Regular />}
                  />
                </DialogTrigger>
              }
            >
              We are here to help you.
            </DialogTitle>
            <DialogContent>
              <iframe
                src={explanationVideoLink}
                title={explanationVideoTitle}
                width="545"
                height="315"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>{explanationText}</p>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
};
