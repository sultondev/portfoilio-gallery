import { atom } from "recoil";
import { projectsListData } from "../constants/projectsListData.constant";
import { ProjectItem } from "../typing/types/projectItem.type";

export const navBarDefaultStateData = atom<string>({
  key: "navBarDefaultStateData",
  default: "-left-1/2",
});

export const projectsListStateData = atom<ProjectItem[]>({
  key: "projectsListStateData",
  default: projectsListData,
});

export const projectsListShowState = atom({
  key: "projectsListShowState",
  default: "show all",
});

export const burgerStateData = atom({
  key: "burgerStateData",
  default: "closed",
});
