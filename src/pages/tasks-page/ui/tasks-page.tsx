import { Layout } from '../../../widgets/layout';
import { ProjectsList } from '../../../widgets/projects-list';

const TasksPage = (): JSX.Element => {
  return (
    <Layout>
      <ProjectsList />
    </Layout>
  );
};

export default TasksPage;
