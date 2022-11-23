import { FunctionComponent } from "react";
import { DocumentCard, DocumentCardDetails, DocumentCardImage, DocumentCardTitle, IDocumentCardStyles, ImageFit } from '@fluentui/react';
import { Link, useNavigate } from "react-router-dom";

//  Interface
interface CardInterface {
    linkTo: string;
    title: string;
    imageSrc: string;
}

//  Styles
const cardStyles: IDocumentCardStyles = {
    root: { display: 'inline-block', marginRight: 20, marginBottom: 20, width: 320 },
};

//  Component
export const Card: FunctionComponent<CardInterface> = ({ linkTo, title, imageSrc }) => {

    // handle click on card
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(linkTo);
    };

    return (
        <DocumentCard
            styles={cardStyles}
            onClick={handleClick}
        >
            <DocumentCardImage height={150} imageFit={ImageFit.contain} imageSrc={imageSrc} />
            <DocumentCardDetails>
                <DocumentCardTitle title={title} shouldTruncate />
            </DocumentCardDetails>
        </DocumentCard>


    );
}