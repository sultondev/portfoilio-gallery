import { useRecoilValue } from "recoil";
import { ProjectItemWrapper } from "../../templates/ProjectItemWrapper.template";
import "./ProjectList.style.css";
import { filteredProjectListState } from "../../recoil/selectors.state";
import { ProjectItem } from "../../typing/types/projectItem.type";

const ProjectsList = () => {
  const projects = useRecoilValue<ProjectItem[]>(filteredProjectListState);

  if (!projects) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <ul className="projects-list lg:flex-row lg:flex-wrap ex-sm:flex-col ex-sm:justify-center ex-sm:items-center ex-sm:gap-4">
      {projects &&
        projects.map((item: ProjectItem) => {
          return (
            <ProjectItemWrapper
              as="li"
              key={item.id + item.tag + item.title}
              className="relative"
            >
              <div className="project-list__cover"></div>
              <img
                src={item.image}
                alt="Alternative words"
                className="w-full h-full object-fill absolute -z-10"
              />
              <div className="flex flex-col p-6 justify-end items-start gap-6">
                <p className="z-10 bg-white text-black px-2 py-1 rounded-2xl text-xl">
                  {item.tag}
                </p>

                <h6 className="text-4xl">{item.title}</h6>
              </div>
            </ProjectItemWrapper>
          );
        })}
    </ul>
  );
};

export default ProjectsList;
