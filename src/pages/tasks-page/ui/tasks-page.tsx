import { Layout } from '../../../widgets/layout';
import { TasksList } from '../../../widgets/tasks-list';

const TasksPage = (): JSX.Element => {
  return (
    <Layout>
      <TasksList />
    </Layout>
  );
};

export default TasksPage;
