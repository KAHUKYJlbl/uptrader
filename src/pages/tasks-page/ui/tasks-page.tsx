import { Layout } from '../../../widgets/layout';
import { TasksList } from '../../../widgets/tasks-list';

const TasksPage = (): JSX.Element => {
  return (
    <Layout page='task'>
      <TasksList />
    </Layout>
  );
};

export default TasksPage;
