import { FunctionComponent } from "react";
import {
  Card,
  CardPreview,
  CardHeader,
} from "@fluentui/react-components/unstable";
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
} from "@fluentui/react-components";
import { HandleClickAsLink } from "../utils/helpers/handleClick";
import { deleteStorage } from "../utils/helpers/jsonHelper";

//  Interfaces
interface ReusableEndCardInterface {
  title: string;
  imageSrc: string;
  linkTo: string;
}

interface ReusableCardInterface {
  title: string;
  imageSrc: string;
  onClick: () => void;
}

const useStyles = makeStyles({
  main: { ...shorthands.gap("16px"), display: "flex", flexWrap: "wrap" },
  card: {
    display: "inline-block",
    marginRight: "20px",
    marginBottom: "20px",
    width: "320px",
    ":hover": {
      boxShadow: tokens.shadow64,
    },
  },
  cardPreview: {
    height: "150px",
  },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
  smallRadius: { ...shorthands.borderRadius(tokens.borderRadiusSmall) },
  grayBackground: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  logoBadge: {
    ...shorthands.padding("5px"),
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    backgroundColor: "#FFF",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
  },
});

//  Component
export const ReusableEndCard: FunctionComponent<ReusableEndCardInterface> = ({
  title,
  imageSrc,
  linkTo,
}) => {
  const styles = useStyles();

  deleteStorage()

  return (
    <Card className={styles.card}>
      <CardPreview
        className={styles.cardPreview}
        onClick={HandleClickAsLink(linkTo, false)}
      >
        <img
          alt="Presentation Preview"
          src={imageSrc}
          className={styles.smallRadius}
        />
      </CardPreview>

      <CardHeader header={<Text weight="semibold">{title}</Text>} />
    </Card>
  );
};

//  Component
export const ReusableCard: FunctionComponent<ReusableCardInterface> = ({
  title,
  imageSrc,
  onClick,
}) => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardPreview className={styles.cardPreview} onClick={onClick}>
        <img
          alt="Presentation Preview"
          src={imageSrc}
          className={styles.smallRadius}
        />
      </CardPreview>

      <CardHeader header={<Text weight="semibold">{title}</Text>} />
    </Card>
  );
};
