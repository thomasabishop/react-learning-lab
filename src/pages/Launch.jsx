import MainLayout from '../layouts/MainLayout';
import taskIndex from '../data/taskIndex';
import Listing from '../ui/Listing';
function Launch() {
  return (
    <MainLayout>
      {taskIndex.map((data, index) => (
        <Listing key={index} {...data} />
      ))}
    </MainLayout>
  );
}

export default Launch;
