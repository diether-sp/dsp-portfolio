import { Injectable } from '@angular/core';

// import { type NewProjectData } from './project/project.model';
import { PROJECT_LIST } from './project-list';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  getCompanyProjects(companyId: string) {
    return PROJECT_LIST.filter((project) => project.companyId === companyId);
  }
}
