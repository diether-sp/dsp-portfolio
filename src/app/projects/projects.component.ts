import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ProjectComponent } from './project/project.component';
import { ProjectsService } from './projects.service';
import { ProjDescComponent } from './proj-desc/proj-desc.component';
import { Project } from './project/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [ProjectComponent, ProjDescComponent, DatePipe]
})
export class ProjectsComponent {
  @Input({ required: true }) companyId!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) duration!: string;

  openProjectId: number | null = null;
  isProjDescModalOpen = false;
  selectedProject: Project | null = null;

  constructor(private projectsService: ProjectsService) {}

  get selectedCompanyProjects() {
    return this.projectsService.getCompanyProjects(this.companyId);
  }

  toggleProject(id: number) {
    this.openProjectId = this.openProjectId === id ? null : id;
  }

  openDesc(project: Project) {
    this.selectedProject = project;
    this.isProjDescModalOpen = true;
  }
}