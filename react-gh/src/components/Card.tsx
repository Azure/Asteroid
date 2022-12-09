import { FunctionComponent } from "react";
import {
  DocumentCard,
  DocumentCardDetails,
  DocumentCardImage,
  DocumentCardTitle,
  IDocumentCardStyles,
  ImageFit,
} from "@fluentui/react";
import { HandleClickAsLink } from "../utils/helpers/handleClick";

//  Interface
interface CardInterface {
  linkTo: string;
  title: string;
  imageSrc: string;
}

//  Styles
const cardStyles: IDocumentCardStyles = {
  root: {
    display: "inline-block",
    marginRight: 20,
    marginBottom: 20,
    width: 320,
  },
};

//  Component
export const Card: FunctionComponent<CardInterface> = ({
  linkTo,
  title,
  imageSrc,
}) => {
  return (
    <DocumentCard styles={cardStyles} onClick={HandleClickAsLink(linkTo)}>
      <DocumentCardImage
        height={150}
        imageFit={ImageFit.contain}
        imageSrc={imageSrc}
      />
      <DocumentCardDetails>
        <DocumentCardTitle title={title} shouldTruncate />
      </DocumentCardDetails>
    </DocumentCard>
  );
};

interface TransitCardInterface {
  onClick: () => void;
  title: string;
  imageSrc: string;
}

export const TransitCard: FunctionComponent<TransitCardInterface> = ({
  onClick,
  title,
  imageSrc,
}) => {

  return (
    <DocumentCard styles={cardStyles} onClick={onClick}>
      <DocumentCardImage
        height={150}
        imageFit={ImageFit.contain}
        imageSrc={imageSrc}
      />
      <DocumentCardDetails>
        <DocumentCardTitle title={title} shouldTruncate />
      </DocumentCardDetails>
    </DocumentCard>
  );
};

