import { useContext } from "react";
import AppContext from "./AppContext";

function Child() {
  const myContext = useContext(AppContext);
  return <p>{myContext.textName}</p>;
}

export default Child;
