import React, { useState } from "react";
import AppContext from "./AppContext";
import Child from "./Child";
import ChildFunc from "./ChildFunc";

function App() {
  const [textValue, setTextValue] = useState("initial value");

  const globalData = {
    textName: textValue,
  };

  return (
    <AppContext.Provider value={globalData}>
      <Child />
      <ChildFunc />
    </AppContext.Provider>
  );
}

export default App;
