import { Injectable } from '@angular/core';

// import { type NewProjectData } from './project/project.model';
import { PROJECT_LIST } from './project-list';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  // private projects = [
  //   {
  //     id: 't1',
  //     companyId: 'c1',
  //     title: 'Master Angular',
  //     summary:
  //       'Learn all the basic and advanced features of Angular & how to apply them.',
  //     dueDate: '2025-12-31',
  //   },
  //   {
  //     id: 't2',
  //     companyId: 'c3',
  //     title: 'Build first prototype',
  //     summary: 'Build a first prototype of the online shop website',
  //     dueDate: '2024-05-31',
  //   },
  //   {
  //     id: 't3',
  //     companyId: 'c3',
  //     title: 'Prepare issue template',
  //     summary:
  //       'Prepare and describe an issue template which will help with project management',
  //     dueDate: '2024-06-15',
  //   },
  // ];

  // constructor() {
  //   const projects = localStorage.getItem('projects');

  //   if (projects) {
  //     this.projects = JSON.parse(projects);
  //   }
  // }

  getCompanyProjects(companyId: string) {
    // return this.projects.filter((project) => project.companyId === companyId);
    return PROJECT_LIST.filter((project) => project.companyId === companyId);

  }

  // addProject(projectData: NewProjectData, companyId: string) {
  //   this.projects.unshift({
  //     id: new Date().getTime().toString(),
  //     companyId: companyId,
  //     title: projectData.title,
  //     summary: projectData.summary,
  //     dueDate: projectData.date,
  //   });
  //   this.saveProjects();
  // }

  // removeProject(id: string) {
  //   this.projects = this.projects.filter((project) => project.id !== id);
  //   this.saveProjects();
  // }

  // private saveProjects() {
  //   localStorage.setItem('projects', JSON.stringify(this.projects));
  // }
}
