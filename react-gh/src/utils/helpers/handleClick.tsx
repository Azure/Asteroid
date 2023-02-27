import { useNavigate } from "react-router-dom";

export function HandleClickAsLink(linkTo: string, resetStorage: boolean) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (linkTo) navigate(linkTo);
  };

  return handleClick;
}
