import { Layout } from '../../../widgets/layout';
import { ProjectsList } from '../../../widgets/projects-list';

const ProjectsPage = (): JSX.Element => {
  return (
    <Layout page='project'>
      <ProjectsList />
    </Layout>
  );
};

export default ProjectsPage;
