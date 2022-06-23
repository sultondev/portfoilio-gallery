import { selector } from "recoil";
import { ProjectItem } from "../typing/types/projectItem.type";
import { projectsListShowState, projectsListStateData } from "./atoms.state";

export const filteredProjectListState = selector<ProjectItem[]>({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(projectsListShowState);
    const list = get(projectsListStateData);

    switch (filter) {
      case "design":
        return list.filter((item) => {
          if (item.tag === "design") {
            return item;
          }
        });
      case "branding":
        return list.filter((item) => item.tag === "branding");
      case "illustration":
        return list.filter((item) => item.tag === "illustration");
      case "motion":
        return list.filter((item) => item.tag === "motion");
      case "random":
        return list.filter((item) => item.tag === "random");
      default:
        return list;
    }
  },
});
