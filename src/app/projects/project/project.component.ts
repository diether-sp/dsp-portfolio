import { Component, Input, inject } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';

import { Project } from './project.model';
import { CardComponent } from "../../shared/card/card.component";
import { ProjectsService } from '../projects.service';

@Component({
    selector: 'app-project',
    standalone: true,
    templateUrl: './project.component.html',
    styleUrl: './project.component.css',
    imports: [CardComponent, DatePipe, NgFor]
})
export class ProjectComponent {
  @Input({required: true}) project!: Project;
  private projectsService = inject(ProjectsService);

  // onCompleteProject() {
  //   this.projectsService.removeProject(this.project.id);
  // }
}
