import { useNavigate } from "react-router-dom";

// create export function handleClick
export function HandleClickAsLink(linkTo: string) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (linkTo) navigate(linkTo);
  };
  return handleClick;
}
