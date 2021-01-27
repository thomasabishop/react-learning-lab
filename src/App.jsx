import React from "react";
import { Route, Switch } from "react-router-dom";
import Launch from "./pages/Launch";
import ChangeText from "./pages/01_ChangeText";
import Counters from "./pages/02_Counters";
import FormCalculations from "./pages/03_FormCalculations";
import GithubUserDir from "./pages/04_GithubUserDir";
import ConditionalRendering from "./pages/05_ConditionalRendering";
import AdvancedHooks from "./pages/06_AdvancedHooks";
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Launch} />
        <Route path="/change-text" component={ChangeText} />
        <Route path="/counters" component={Counters} />
        <Route path="/form-calculations" component={FormCalculations} />
        <Route path="/gh-user-directory" component={GithubUserDir} />
        <Route path="/conditional-rendering" component={ConditionalRendering} />
        <Route path="/advanced-hooks" component={AdvancedHooks} />
      </Switch>
    );
  }
}

export default App;
