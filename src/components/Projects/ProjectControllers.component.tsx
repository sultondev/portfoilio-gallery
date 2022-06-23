import {
  projectsListStateData,
  projectsListShowState,
} from "../../recoil/atoms.state";
import { useRecoilState } from "recoil";
import { ProjectItem } from "../../typing/types/projectItem.type";
export const ProjectControllers = () => {
  const [projects, ,] = useRecoilState<ProjectItem[]>(projectsListStateData);
  const [filterOfProjects, setFilterOfProjects] = useRecoilState<string>(
    projectsListShowState
  );
  let i = 0;
  const uniqueTypes =
    projects &&
    projects.reduce((acc: string[], curr: ProjectItem) => {
      if (!acc.includes(curr.tag)) {
        acc.push(curr.tag);
      }
      return acc;
    }, [] as string[]);
  function CapitalizeText(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function ChangeProjectTags(arg: string) {
    setFilterOfProjects(arg);
  }

  return (
    <div className="projects-controller my-6 flex justify-center text-xl">
      <select
        name="projects"
        id=""
        className="text-black ex-sm:block lg:hidden"
        onChange={(e) => ChangeProjectTags(e.target.value)}
      >
        <option value="show all" className="text-black">
          Show All
        </option>
        {projects &&
          uniqueTypes.map((item: string) => {
            return (
              <option value={item} key={item + i++} className="text-black">
                {CapitalizeText(item)}
              </option>
            );
          })}
      </select>
      <ul className="text-black flex-row justify-between gap-6 ex-sm:hidden lg:flex ">
        <li className="text-black">
          <button
            onClick={() => ChangeProjectTags("show all")}
            className="text-black"
          >
            Show All
          </button>
        </li>
        {projects &&
          uniqueTypes.map((item: string) => {
            return (
              <li key={item + i++} className="text-black">
                <button onClick={() => ChangeProjectTags(item)}>
                  {CapitalizeText(item)}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
