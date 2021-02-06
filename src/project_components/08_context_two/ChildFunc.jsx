import { useContext } from "react";
import AppContext from "./AppContext";

function ChildFunc() {
  const myContext = useContext(AppContext);
  return (
    <input value={myContext.textValue} onChange={myContext.setTextValue} />
  );
}

export default ChildFunc;
