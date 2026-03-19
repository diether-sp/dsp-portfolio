import { Component, Input, inject, HostListener } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';

import { Project } from './project.model';
import { CardComponent } from "../../shared/card/card.component";
import { ProjectsService } from '../projects.service';
import { ProjDescComponent } from '../proj-desc/proj-desc.component';

@Component({
    selector: 'app-project',
    standalone: true,
    templateUrl: './project.component.html',
    styleUrl: './project.component.css',
    imports: [CardComponent, ProjDescComponent, DatePipe, NgFor]
})
export class ProjectComponent {
  isProjDescModalOpen = false;
  @Input({required: true}) project!: Project;
  private projectsService = inject(ProjectsService);

  openProjDescModal() {
    this.isProjDescModalOpen = true;
  }
}
