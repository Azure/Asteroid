import {
  Button,
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogSurface,
  DialogBody,
  DialogContent,
} from "@fluentui/react-components";
import { QuestionCircleRegular, Dismiss24Regular } from "@fluentui/react-icons";

//  Interface
interface ExplenationInterface {
  headerText: string;
  explanationText: string;
  videoTitle: string;
  explanationVideo: string;
}

//  Component
export const ExplanationButton: React.FunctionComponent<
  ExplenationInterface
> = ({ explanationText, videoTitle, explanationVideo }) => {
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
                src={explanationVideo}
                title={videoTitle}
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
