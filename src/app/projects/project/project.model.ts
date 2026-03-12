export interface Project {
  id: string;
  companyId: string;
  title: string;
  technologies: Array<string>;
  responsibilities: Array<string>;
  startDate: string;
  endDate: string;
}

export interface NewProjectData {
  title: string;
  summary: string;
  date: string;
}
