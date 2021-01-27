import ExperimentBody from "../ui/ExperimentBody";
import ChangeTextClass from "../project_components/01_change_text/ChangeTextClass";
import ChangeTextHook from "../project_components/01_change_text/ChangeTextHook";
function ChangeText() {
  return (
    <ExperimentBody title="Change text">
      <ChangeTextClass />
      <ChangeTextHook />
    </ExperimentBody>
  );
}
export default ChangeText;
