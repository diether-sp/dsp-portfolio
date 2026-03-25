export interface Project {
  id: number;
  companyId: string;
  desc: string;
  title: string;
  technologies: Array<string>;
  responsibilities: Array<string>;
  startDate: string;
  endDate: string;
}
