import { useNavigate } from "react-router-dom";
// import { getStorage, keyValueGenerator } from "./jsonHelper";

// create export function handleClick
export function HandleClickAsLink(linkTo: string, resetStorage: boolean) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (linkTo) navigate(linkTo);
  };

  // TDOO: add resetStorage to the if statement
  if (resetStorage) {
    // localStorage.setItem("KeyValueMap", JSON.stringify(keyValueGenerator()));
  }

  return handleClick;
}
