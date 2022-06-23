import ProjectsList from "../ProjectsList/ProjectsList.component";
import { ProjectControllers } from "./ProjectControllers.component";
const Projects = () => {
  return (
    <div>
      <ProjectControllers />
      <ProjectsList />
    </div>
  );
};

export default Projects;
