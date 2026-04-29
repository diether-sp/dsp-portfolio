import { Component, Input } from '@angular/core';

import { ProjectComponent } from './project/project.component';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [ProjectComponent]
})
export class ProjectsComponent {
  @Input({ required: true }) companyId!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) duration!: string;

  constructor(private projectsService: ProjectsService) {}

  get selectedCompanyProjects() {
    return this.projectsService.getCompanyProjects(this.companyId);
  }
}