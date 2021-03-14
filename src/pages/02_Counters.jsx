import ExperimentBody from '../ui/ExperimentBody';
import CounterClass from '../project_components/02_counters/CounterClass';
import CounterHookOne from '../project_components/02_counters/CounterHookOne';
import CounterHookTwo from '../project_components/02_counters/CounterHookTwo';

function Counters() {
  return (
    <ExperimentBody title="Counters">
      <CounterClass />
      <CounterHookOne />
      <CounterHookTwo />
    </ExperimentBody>
  );
}
export default Counters;
